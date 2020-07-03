import axiosService from './../commons/AxiosService';
import {END_POINT} from './../constantPages/apis';

const url = "listGroupTest";

export const getListGroupTest = ()=>{
    return axiosService.get(`${END_POINT}/${url}`)
}
