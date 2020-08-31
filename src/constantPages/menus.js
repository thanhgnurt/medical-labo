import React from "react";
import ListAltIcon from "@material-ui/icons/ListAlt";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
// import AccessAlarmOutlinedIcon from "@material-ui/icons/AccessAlarmOutlined";

export const MENUS = [
  {
    name: "Trang chủ",
    to: "/",
    icon: <FormatListBulletedOutlinedIcon />,
    scroll : {
      id : "ID_HOME",
      offset : 0,

    }
  },
  {
    name: "Danh mục",
    to: "/danh-muc-xet-nghiem",
    icon: <FormatListBulletedOutlinedIcon />,
    scroll : {
      id : "ID_CATEGORY_TEST",
      offset : -65,

    }
  },
  {
    name: "Lưu ý",
    to: "/luu-y-khi-lay-mau",
    icon: <CommentOutlinedIcon />,
    scroll : {
      id : "ID_NOTE",
      offset : -65

    }
  },
  {
    name: "Tin tức",
    to: "/tin-tuc-&-cuoc-song",
    icon: <ListAltIcon />,
    scroll : {
      id : "ID_NEWS_MEDICAL",
      offset : -75,

    }
  },

];


