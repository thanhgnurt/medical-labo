import axiosService from './../commons/AxiosService';
import {END_POINT_2} from './../constantPages/apis';

const urlUserLogin = "QuanLyNguoiDung/DangNhap";
const urlAdminLogin = "QuanLyNguoiDung/DangNhap";

export const userLoginApi = (body)=>{
    return axiosService.post(`${END_POINT_2}/${urlUserLogin}`, body)
}

export const adminLoginApi = (body)=>{
    return axiosService.post(`${END_POINT_2}/${urlAdminLogin}`, body)
}
