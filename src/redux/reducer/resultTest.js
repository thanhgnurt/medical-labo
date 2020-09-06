import * as actionTypes from "./../constantActions/user";
import {resultTest} from './data'

const initialState = resultTest

const resultTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOADDING_RESULT:
      return [ ...state];
    case actionTypes.USER_LOADDING_RESULT_SUCCESS:
    //   const { data } = action.payload.data;
      return [ ...state];
    case actionTypes.USER_LOADDING_RESULT_FAILD:
      return [ ...state
      ];
      default:
      return [...state ];
  }
};

export default resultTestReducer;
