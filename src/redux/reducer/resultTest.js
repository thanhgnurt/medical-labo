import * as actionTypes from "./../constantActions/user";

const initialState = {
  resultTest: [],
};

const resultTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOADDING_RESULT:
      return { ...state, reusultTest: [] };
    case actionTypes.USER_LOADDING_RESULT_SUCCESS:
      const { data } = action.payload.data;
      return { ...state, resultTest: data };
    case actionTypes.USER_LOADDING_RESULT_FAILD:
      return { ...state, resultTest: [] };
      default:
      return { ...state };
  }
};

export default resultTestReducer;
