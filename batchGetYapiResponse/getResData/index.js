const request = require("request");
const path = require("path");
const fs = require("fs");
const { compile, compileFromFile } = require('json-schema-to-typescript');
const ejs = require("ejs");
const { forkJoin, interval } = require("rxjs");
const { filter, take } = require("rxjs/operators");

const { infolder, outfolder, baseUrl, token, httpList } = require("./config")

let templateObj = { list: [] };
const getInitValue = (type) => {
    const initValueMap = {
        number: 0,
        string: '',
        boolean: false,
    }
    if (type.includes('[]')) {
        return []
    }
    if (type.includes('|')) {
        return type.split('|')[0]
    }
    return initValueMap[type]
};
const strToJson = (str) => {
    const desc = / \* (.*)\n/.exec(str)
    const name = / ([a-zA-Z0-9]*)\??:/.exec(str)
    let type = str.split(':').pop().trim()
    if (type.includes('(')) {
        const reg = /\("(.*?)"\)/g
        const typeArray = []
        while (true) {
            const res = reg.exec(type)
            if (res) {
                typeArray.push(res[1])
            } else {
                break
            }
        }
        type = typeArray.join('|')
    }
    return {
        desc: desc ? desc[1] : '',
        name: name ? name[1] : '',
        type,
        initValue: getInitValue(type),
        required: !str.includes('?')
    }
};
const getChildList = (text) => {
    const children = []
    if (!text) {
        return children;
    }
    let context = {
        parent: null,
        list: children,
    }
    const array = text.split(';')
    array.pop()
    array.forEach((item) => {
        if (item.includes('{')) {
            const child = {
                ...strToJson(item.split('{')[0]),
                children: [strToJson(item.split('{')[1])],
            }
            context.list.push(child)
            context = {
                parent: context,
                list: child.children,
            }
        } else if (item.includes('}')) {
            if (context.parent) {
                const lastItem = context.parent.list[context.parent.list.length - 1]
                lastItem.type = item.includes('[]') ? 'array' : 'object'
                context = context.parent
            }
        } else {
            context.list.push(strToJson(item))
        }
    })
    return children
};
const getInterfaceStr = (attrList) => {
    return attrList.reduce((result, attr) => {
        result += `\n    // ${attr.desc}\n    ${attr.name}`
        if (!attr.required) {
            result += '?'
        }
        if (attr.children) {
            if (attr.type === 'array') {
                result += `: Array<{` + '\n' +
                    getInterfaceStr(attr.children) + '\n' +
                    `}>`
            } else if (attr.type === 'object') {
                result += `: {` + '\n' +
                    getInterfaceStr(attr.children) + '\n' +
                    `}`
            }
            // todo
        } else {
            result += ':' + (attr.type ? attr.type : 'undefined')
        }
        return result
    }, "")
}
const exportInterface = (tableData, name) => {
    const dataList = tableData.filter(item => item.name === 'data' && item.type !== 'unknow')
    if (dataList.length && dataList[0].children) {
        return `export interface ${name} {` + getInterfaceStr(dataList[0].children) + '\n' + '}\n'
    }
    return null
};
const getClassStr = (attrList) => {
    let str = attrList.reduce((result, attr) => {
        result += `\n    // ${attr.desc}`
        result += `\n    public ${attr.name}`
        if (!attr.required) {
            result += '?'
        }
        if (attr.children) {
            if (attr.type === 'array') {
                result += `: Array<{` + '\n' +
                    getInterfaceStr(attr.children) + '\n' +
                    `}> = []`
            } else if (attr.type === 'object') {
                result += `: {` + '\n' +
                    getInterfaceStr(attr.children) + '\n' +
                    `}`
            }
            // todo
        } else {
            result += `: ${(attr.type ? attr.type : 'undefined')} = `
            if (!attr.required) {
                result += 'undefined'
            } else {
                result += JSON.stringify(attr.initValue)
            }
        }

        return result
    }, "")
    return str
}
const exportClass = (tableData, name) => {
    return `export class ${name} {` + getClassStr(tableData) + '\n' + '}\n'
};
const transformTs = async (value, className) => {
    if (!value) {
        return await []
    }
    let json = JSON.parse(value);
    let copyJson = { ...json };
    if (json.properties.code && json.properties.msg) {
        copyJson = { ...json.properties.data };
    }
    const ts = await compile(json, className, {
        bannerComment: '',
        declareExternallyReferenced: false,
        enableConstEnums: true,
        unreachableDefinitions: false,
        strictIndexSignatures: false,
        style: {
            bracketSpacing: false,
            printWidth: 120,
            semi: true,
            singleQuote: false,
            tabWidth: 4,
            trailingComma: 'none',
            useTabs: false
        }
    });
    const val = ts.replace(/\n\s*\[k: string\]: unknown;/g, '');
    const getContentReg = /export interface (.*?) {([\d\D]*)}/
    const res = getContentReg.exec(val)
    const content = res && res[2] ? res[2] : null
    let result = getChildList(content)
    return result;
};
for (let index = 0; index < httpList.length; index++) {
    request({
        url: baseUrl + httpList[index],
        headers: { Cookie: token }
    }, (err, res, body) => {
        if (err) {
            console.log(err)
        }
        if (!err && res.statusCode == 200) {
            const data = JSON.parse(body).data
            const _path = data.path.substr(data.path.lastIndexOf('/') + 1)
            const Path = _path.charAt(0).toUpperCase() + _path.slice(1)
            const initData = {
                name: data.title,
                path: data.path,
                _path,
                Path,
                method: data.method.toLocaleLowerCase()
            }
            const p1 = transformTs(data.req_body_other, initData.Path + 'ParamsClass');
            const p2 = transformTs(data.res_body, initData.Path + 'Type');
            forkJoin(p1, p2).subscribe(res => {
                res[0] && res[0].length > 0 && (initData.req_body_other = exportClass(res[0], initData.Path + 'ParamsClass'))
                res[1] && res[1].length > 0 && (initData.res_body = exportInterface(res[1], initData.Path + 'Type'))
                templateObj.list.push(initData)
            })
        }
    });
}
interval(1000).pipe(
    filter(() => httpList.length === templateObj.list.length),
    take(1)
).subscribe(res => {
    const files = fs.readdirSync(infolder);
    files.map((name) => {
        let file = fs.readFileSync(path.join(infolder, name), 'utf-8')
        template = ejs.render(file, templateObj)
        fs.writeFileSync(path.join(outfolder, name.split(".ejs")[0]), template)
    })
    console.log('代码生成成功')
})