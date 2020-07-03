import * as listGroupTestApis from "./../../apis/listGroupTest";
import * as testActionTypes from "./../constantActions/test";
import { openLoading, closeLoading } from "./ui";

export const fetchListGroupTestRequest = () => {
  return (dispatch) => {
    dispatch(fetchListGroupTest());
    dispatch(openLoading());
    listGroupTestApis
      .getListGroupTest()
      .then((data) => {
        dispatch(fetchListGroupTestSuccess(data, dispatch));
      })
      .catch((error) => {
        dispatch(fetchListGroupTestFaild(error));
      });
  };
};

export const fetchListGroupTest = () => ({
  type: testActionTypes.FETCH_GROUP_TEST,
});
export const fetchListGroupTestSuccess = (data, dispatch) => {
  setTimeout( ()=>{dispatch(closeLoading())},1000)
  return {
    type: testActionTypes.FETCH_GROUP_TEST_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListGroupTestFaild = (error) => ({
  type: testActionTypes.FETCH_GROUP_TEST_FAILD,
  payload: {
    error,
  },
});
