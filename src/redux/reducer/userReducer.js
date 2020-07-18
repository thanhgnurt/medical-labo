import * as actionTypes from "./../constantActions/user";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      return { ...state };
    case actionTypes.USER_LOGIN_FAILD:
      return { ...state };

    default:
      return { ...state };
  }
};

export default userReducer;
