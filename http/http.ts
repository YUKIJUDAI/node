import axios, { AxiosRequestConfig, Method } from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.error('服务器请求失败，请稍后再试')
        return Promise.reject(error)
    }
)

const request = <R = any>(method: Method, path: string, data: PureObject = {}, configParmas: AxiosRequestConfig) => {
    // 请求头
    const baseHead = {
        token: localStorage.getItem('token'),
    }
    configParmas.headers = Object.assign(baseHead, configParmas.headers)
    return axios
        .request<{ code?: number | string; msg?: string; data: R; tid?: string }>({
            method: method,
            url: path,
            data,
            ...configParmas
        })
        .then(res => {
            if (res.data.code === 1) {
                return res.data || {}
            } else {
                return Promise.reject(res.data)
            }
        })
}

export const ajax = {
    getList<T = any>(path: string, data?: PureObject<any>, configParmas?: AxiosRequestConfig) {
        return request<{ list: T[] }>('get', path, data, configParmas).then(res => {
            return res ? res.data.list : Promise.reject('网络请求错误')
        })
    },
    postList<T = any>(path: string, data?: PureObject<any>, configParmas?: AxiosRequestConfig) {
        return request<{ list: T[] }>('post', path, data, configParmas).then(res => {
            return res ? res.data.list : Promise.reject('网络请求错误')
        })
    },
    get<T = any>(path: string, data?: PureObject<any>, configParmas?: AxiosRequestConfig) {
        return request<T>('get', path, data, configParmas).then(res => {
            return res ? res.data : Promise.reject('网络请求错误')
        })
    },
    post<T = any>(path: string, data?: PureObject<any>, configParmas?: AxiosRequestConfig) {
        return request<T>('post', path, data, configParmas).then(res => {
            return res ? res.data : Promise.reject('网络请求错误')
        })
    }
}

export default ajax
