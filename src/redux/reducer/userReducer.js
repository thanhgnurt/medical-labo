import * as actionTypes from "./../constantActions/user";

const initialState = {
  loginFaild: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      return { ...state, loginFaild: false };
    case actionTypes.USER_LOGIN_FAILD:
      return { ...state, loginFaild: true };
    case actionTypes.USER_LOGIN_RESET:
      return { ...state, loginFaild: false };

    default:
      return { ...state };
  }
};

export default userReducer;
