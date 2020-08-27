import axiosService from '../commons/AxiosService';
import {END_POINT} from '../constantPages/apis';


const url = "listGroupTest";
const urlResult = "resultTest";
const urlNews = "newsMedical"

export const getListGroupTest = ()=>{
    return axiosService.get(`${END_POINT}/${url}`)
}

export const getListResultTest = ()=>{
    return axiosService.get(`${END_POINT}/${urlResult}`)
}

export const getListNewsHealthOfLife=()=>{
    return axiosService.get(`${END_POINT}/${urlNews}`)
}
