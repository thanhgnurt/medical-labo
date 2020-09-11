import * as actionTypes from "./../../constantActions/resultTest";

const initialState = 0;

const tabResultAdvisory = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_RESULT_ADVISORY_FEEDBACK:
      return state=action.data;
    default:
      return state;
  }
};

export default tabResultAdvisory;
