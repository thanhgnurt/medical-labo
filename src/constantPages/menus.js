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
  },
  {
    name: "Danh mục xét nghiệm",
    to: "/danhmucxetnghiem",
    icon: <FormatListBulletedOutlinedIcon />,
  },
  {
    name: "Lưu ý",
    to: "/luuykhilaymau",
    icon: <CommentOutlinedIcon />,
  },
  {
    name: "Tin tức y khoa",
    to: "/tintucykhoa",
    icon: <ListAltIcon />,
  },
  // {
  //   name: "Đặt lịch lấy mẫu",
  //   to: "/lienhe",
  //   icon: <AccessAlarmOutlinedIcon />,
  // },
];
