import {getListNewsHealthOfLife} from './../../apis/getApis';
import * as actionTypes from './../constantActions/userPape';

export const fetchListNewsRequest=()=>{
    return dispatch=>{
       dispatch(fetchListNews()) ;
        getListNewsHealthOfLife()
        .then(data=>{
            dispatch(fetchListNewsSuccess(data))
        })
        .catch(error=>{
            dispatch(fetchListNewsFaild(error))
        })
    }
}
export const fetchListNews=()=>({
    type : actionTypes.FETCH_LIST_NEWS
})
export const fetchListNewsSuccess=data=>({
    type : actionTypes.FETCH_LIST_NEWS_SUCCESS,
    payload : data

})
export const fetchListNewsFaild=error=>({
    type: actionTypes.FETCH_LIST_NEWS_FAILD,
    payload : error
})