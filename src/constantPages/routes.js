import React from "react";
import LoginPageContainer from "./../containers/LoginPageContainer";
import SignupPageContainer from "./../containers/SignupPageContainer";
import AdminPageContainer from "../containers/AdminModuleContainer";
import UserModuleContainer from "./../containers/UserModuleContainer";
import SetSchedule from './../containers/SetScheduleContainer';

import ListAltIcon from "@material-ui/icons/ListAlt";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
export const ADMIN_ROUTES = [
  {
    path: "/admin",
    name: "Page admin",
    component: AdminPageContainer,
  },
];
export const USER_ROUTES = [
  {
    path: "/",
    name: "Trang chủ",
    exact: true,
    component: UserModuleContainer,
  },
  {
    name: "Danh mục xét nghiệm",
    path: "/danh-muc-xet-nghiem",
    exact: true,
    icon: <FormatListBulletedOutlinedIcon />,
    scroll : {
      id : "ID_CATEGORY_TEST",
      offset : -65,

    },
    component: UserModuleContainer,
  },

  {
    path: "/luu-y-khi-lay-mau",
    exact: true,
    name: "Lưu ý",
    icon: <CommentOutlinedIcon />,
    scroll : {
      id : "ID_NOTE",
      offset : -140

    },
    component: UserModuleContainer,
  },
  {
    name: "Tin tức y khoa",
    path: "/tin-tuc-y-khoa",
    exact: true,
    icon: <ListAltIcon />,
    scroll : {
      id : "ID_NEWS_MEDICAL",
      offset : -120,

    },
    component: UserModuleContainer,
  },

];

export const LOGIN_SIGNUP_ROUTES = [
  {
    path: "/login",
    name: "Login",
    component: LoginPageContainer,
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: SignupPageContainer,
  },
];

export const SET_SCHEDULE_ROUTE = {
  path : "/dat-lich/:id",
  name : "Set a sampling schedule",
  component : SetSchedule
}