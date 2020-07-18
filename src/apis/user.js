import axiosService from './../commons/AxiosService';
import {END_POINT_2} from './../constantPages/apis';

const urlLogin = "QuanLyNguoiDung/DangNhap";

export const userLoginApi = (body)=>{
    return axiosService.post(`${END_POINT_2}/${urlLogin}`, body)
}
