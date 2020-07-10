import * as actionTypes from "./../constantActions/test";

const initialState = {
  listGroupTest: [],
  paperSelect : 1
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GROUP_TEST:
      return {
        ...state,
        listGroupTest: [],
      };
    case actionTypes.FETCH_GROUP_TEST_SUCCESS:
      const { data } = action.payload.data;
      return {
        ...state,
        listGroupTest: data,
      };
    case actionTypes.FETCH_GROUP_TEST_FAILD:
      return {
        ...state,
        listGroupTest: [],
      };
    case actionTypes.SELECT_PAPER_TEST:
      return {
        ...state,
        paperSelect : action.paper
      }

    default:
      return { ...state };
  }
};

export default myReducer;
