
 

//  删除提现账户返回参数类型
export interface AccountType {
    // 
    :}
    // 
    tid?:string
}
     



//  修改提现账户参数类型
export class AccountParamsClass {
    // 账户id
    public id?: number = undefined
    // 账户类型
    public accountType: 0 | 1 | 2 = "0 "
    // 账户真实名称 对公的公司名称 对私的开卡人姓名都传这个字段
    public realName: string = ""
    // 提现账号 支付宝账号 银行卡都传这个字段
    public accountNo: string = ""
    // 开户银行 对公 or 对私必传
    public bankName?: string = undefined
    // 银行卡id 对公 or 对私必传
    public bankId?: number = undefined
    // 支行名称 对公 or 对私必传
    public branchBankName?: string = undefined
}
 
 

//  修改提现账户返回参数类型
export interface AccountType {
    // 
    :}
    // 
    tid?:string
}
     


 

//  提现账户列表返回参数类型
export interface ListType {
    // 
    list?:undefined
    // 房东id
    landlordId?:number
    // 账户类型
    accountType?:0 | 1 | 2
    // 账户类型描述
    accountTypeDesc?:"支付宝" | "对私" | "对公"
    // 银行名称
    bankName?:string
    // 银行卡id
    bankId?:number
    // 银行图标
    bankIcon?:string
    // 账户人名称
    realName?:string
    // 账号
    accountNo?:string
}
     

  