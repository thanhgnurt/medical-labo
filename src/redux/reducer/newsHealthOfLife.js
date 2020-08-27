import * as actionTypes from "./../constantActions/userPape";

const initialState = {
  listNews: []
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_NEWS:
      return {
        ...state,
        listNews: [],
      };
    case actionTypes.FETCH_LIST_NEWS_SUCCESS:
        const {data}=action.payload
      return {
        ...state,
        listNews:data
      };
    case actionTypes.FETCH_LIST_NEWS_FAILD:
      return {
        ...state,
        listNews: [],
      };


    default:
      return { ...state };
  }
};

export default myReducer;
