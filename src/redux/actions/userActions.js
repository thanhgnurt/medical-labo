import * as actionTypes from "./../constantActions/user";
import * as userApi from "./../../apis/user";

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
