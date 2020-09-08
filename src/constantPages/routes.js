import AddAlertIcon from '@material-ui/icons/AddAlert';
import AppsIcon from '@material-ui/icons/Apps';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import HomeIcon from '@material-ui/icons/Home';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import React from "react";
import AdminPageContainer from "../containers/AdminModuleContainer";
import AdminLogin from "./../containers/AdminModuleContainer/AdminLogin";
import ContentAdmin from "./../containers/AdminModuleContainer/Content";
import DetailTestContainer from './../containers/DetailTestContainer';
import HeathOfLifeItemContainer from './../containers/HeathOfLifeItemContainer';
import LoginPageContainer from "./../containers/LoginPageContainer";
import SetScheduleContainer from "./../containers/SetScheduleContainer";
import SignupPageContainer from "./../containers/SignupPageContainer";
import UserModuleContainer from "./../containers/UserModuleContainer";
import ViewResultContainer from "./../containers/ViewResultContainer";

export const ADMIN_ROUTES = [
  {
    path: "/admin",
    exact: false,
    name: "Page admin",
    component: AdminPageContainer,
  },
  {
    path: "/admin/login",
    exact: false,
    name: "Page admin",
    component: AdminLogin,
  },
];

export const ADMIN_MENUS = [
  {
    path: "/admin/menu1fgf",
    name: "Xem kết quả",
    icon:<VisibilityOutlinedIcon/>,
    component: ContentAdmin,
  },

  {
    path: "/admin/add-news",
    name: "Tin Tức",
    icon:<FiberNewIcon/>,
    component: ContentAdmin,
  },

  {
    path: "/admin/menu1gg",
    name: "Cài Đặt",
    icon:<SettingsOutlinedIcon/>,
    component: ContentAdmin,
  },
  {
    path: "/admin/menu1gfggfg",
    name: "Kết Quả",
    component: ContentAdmin,
    icon : <PlaylistAddCheckIcon/>
  },
  {
    path: "/admin/menu1gfg",
    name: "Thống kê",
    component: ContentAdmin,
    icon: <BlurOnIcon/>
  },
];
export const USER_ROUTES = [
  {
    name: "Trang chủ",
    path: "/",
    exact: true,
    component: UserModuleContainer,
    icon: <HomeIcon />,
    scroll : {
      id : "ID_HOME",
      offset : 0,

    }
  },
  {
    name: "Danh mục xét nghiệm",
    path: "/danh-muc-xet-nghiem",
    exact: false,
    icon: <AppsIcon />,
    scroll : {
      id : "ID_CATEGORY_TEST",
      offset : -65,

    },
    component: UserModuleContainer,
  },

  {
    path: "/luu-y-khi-lay-mau",
    exact: false,
    name: "Lưu ý",
    // icon: <CommentOutlinedIcon />,
    // scroll: {
    //   id: "ID_NOTE",
    //   offset: -140,
    // },
    icon: <AddAlertIcon />,
    scroll : {
      id : "ID_NOTE",
      offset : -55

    },
    component: UserModuleContainer,
  },
  {
    name: "Tin tức y khoa",
    path: "/tin-tuc-y-khoa",
    exact: false,
    // icon: <ListAltIcon />,
    // scroll: {
    //   id: "ID_NEWS_MEDICAL",
    //   offset: -120,
    // },
    icon: <FiberNewIcon />,
    scroll : {
      id : "ID_NEWS_MEDICAL",
      offset : -75,

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
  path: "/dat-lich/:id",
  name: "Set a sampling schedule",
  component: SetScheduleContainer,
};
export const HEATH_OF_LIFE_ROUTE = {
  path: "/tin-tuc-y-khoa/:id",
  name: "Heath of life",
  component: HeathOfLifeItemContainer,
};
export const DETAIL_TEST_ROUTE = {
  path: "/chi-tiet-xet-nghiem/:id",
  name: "Detail test",
  component: DetailTestContainer,
};

export const VIEW_RESULT_ROUTE = {
  path: "/ket-qua",
  name: "View result",
  component: ViewResultContainer,
};

