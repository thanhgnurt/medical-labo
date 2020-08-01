import axiosService from '../commons/AxiosService';
import {END_POINT} from '../constantPages/apis';


const url = "listGroupTest";
const urlResult = "resultTest"

export const getListGroupTest = ()=>{
    return axiosService.get(`${END_POINT}/${url}`)
}

export const getListResultTest = ()=>{
    return axiosService.get(`${END_POINT}/${urlResult}`)
}
