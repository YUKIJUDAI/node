import {
    
    AccountType, 

    AccountParamsClass, 
    AccountType, 

    
    ListType, 
} from "./type"

//  删除提现账户
export const accountApi = () =>
    window.http.post<httpResponse<AccountType>>('/landlord/wap/delete/withdraw/account');

//  修改提现账户
export const accountApi = (data:AccountParamsClass) =>
    window.http.post<httpResponse<AccountType>>('/landlord/wap/edit/withdraw/account', data);

//  提现账户列表
export const listApi = () =>
    window.http.post<httpResponse<ListType>>('/landlord/wap/withdraw/account/list');
