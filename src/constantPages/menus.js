import AddAlertIcon from '@material-ui/icons/AddAlert';
import AppsIcon from '@material-ui/icons/Apps';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import HomeIcon from '@material-ui/icons/Home';
import React from "react";

export const MENUS = [
  {
    name: "Trang chủ",
    to: "/",
    icon: <HomeIcon />,
    scroll : {
      id : "ID_HOME",
      offset : 0,

    }
  },
  {
    name: "Danh mục",
    to: "/danh-muc-xet-nghiem",
    icon: <AppsIcon />,
    scroll : {
      id : "ID_CATEGORY_TEST",
      offset : -55,

    }
  },
  {
    name: "Lưu ý",
    to: "/luu-y-khi-lay-mau",
    icon: <AddAlertIcon />,
    scroll : {
      id : "ID_NOTE",
      offset : -55.5

    }
  },
  {
    name: "Tin tức",
    to: "/tin-tuc-y-khoa",
    icon: <FiberNewIcon />,
    scroll : {
      id : "ID_NEWS_MEDICAL",
      offset : -65,

    }
  },

];


