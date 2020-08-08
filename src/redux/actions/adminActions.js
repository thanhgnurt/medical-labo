import * as actionTypes from './../constantActions/admin';
import {adminLoginApi} from './../../apis/user';


export const adminLoginRequest = (dataLogin)=>{
    return (dispatch) =>{
        adminLoginApi(dataLogin.user)
        .then((data)=>{
            localStorage.setItem("ADMIN", JSON.stringify(data.data))
            dispatch(adminLoginSuccess(data.data))
            dataLogin.history.replace("/admin")

        })
        .catch((error)=>{
            dispatch(adminLoginFaild(error))

        })
    }
}

export const adminLoginSuccess=(data)=>({
    type : actionTypes.ADMIN_LOGIN_SUCCESS,
    payload : data
})

export const adminLoginFaild=(error)=>({
    type : actionTypes.ADMIN_LOGIN_FAILD,
    payload : error
    
})