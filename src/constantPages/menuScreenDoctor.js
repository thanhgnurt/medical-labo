// import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddIcon from '@material-ui/icons/Add';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import React from "react";

export const MENU_SCREEN_DOCTOR = [
//   {
//     name: "Trang chủ",
//     to: "/",
//     icon: <HomeIcon />,
//     scroll : {
//       id : "ID_HOME",
//       offset : 0,

//     }
//   },
//   {
//     name: "Danh sách bệnh nhân",
//     to: "/ket-qua/danh-sach-benh-nhan",
//     icon: <FormatListBulletedIcon />,
//     scroll : {
//       id : "ID_CATEGORY_TEST",
//       offset : -55,

//     }
//   },
  {
    name: "Kết quả",
    to: "/ket-qua/ket-qua",
    icon: <DoneAllIcon />,
    scroll : {
      id : "ID_CATEGORY_TEST",
      offset : -55,

    }
  },
  {
    name: "Thêm bệnh nhân",
    to: "/ket-qua/tu-van",
    icon: <AddIcon />,
    scroll : {
      id : "ID_NOTE",
      offset : -55.5

    }
  },
  {
    name: "Chỉ định",
    to: "/ket-qua/chi-dinh",
    icon: <BorderColorIcon />,
    scroll : {
      id : "ID_NEWS_MEDICAL",
      offset : -65,

    }
  },

];


