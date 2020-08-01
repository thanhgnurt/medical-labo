import * as actionTypes from "./../constantActions/user";
import * as userApi from "./../../apis/user";
import { openLoading, closeLoading } from "./ui";
import {getListResultTest} from './../../apis/getApis';

export const userLogin = (dataLogin) => {
  return (dispatch) => {
    userApi
      .userLoginApi(dataLogin.user)
      .then((data) => {
        localStorage.setItem("USER", JSON.stringify(data.data));
        dispatch(userLoginSuccess(data.data));
        dataLogin.history.replace(dataLogin.navigation)
      })
      .catch((error) => {
        dispatch(userLoginFaild(error));
      });
  };
};

export const userLoginSuccess = (data) => {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload: { data },
  };
};
export const userLoginFaild = (error) => {
  return {
    type: actionTypes.USER_LOGIN_FAILD,
    payload: { error },
  };
};


export const fetchResultRequest = ()=>{
  return (dispatch)=>{
    dispatch(openLoading())
    getListResultTest()
    .then(data=>{
      dispatch(fetchResultSuccess(data))
      setTimeout( ()=>{dispatch(closeLoading())},800)
    })
    .catch(error=>{
      dispatch(fetchResultFaild(error))
      dispatch(closeLoading())

    })


  }
}

export const fetchResultSuccess = (data)=>{
  return {
    type : actionTypes.USER_LOADDING_RESULT_SUCCESS,
    payload : {data}
  }
}

export const fetchResultFaild = (error)=>{
  return {
    type : actionTypes.USER_LOADDING_RESULT_FAILD,
    payload : {error}
  }
}