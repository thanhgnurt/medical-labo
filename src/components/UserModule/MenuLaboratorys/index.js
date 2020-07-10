import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import AllInclusiveOutlinedIcon from "@material-ui/icons/AllInclusiveOutlined";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    padding: "20px 0",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function MenuLaboratorys() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab variant="extended" color="secondary">
        <i className="fas fa-flask mr-2"></i>
        Sinh Hóa -<i className="fas fa-dna mr-2"></i>
        Miễn Dịch
      </Fab>
      {/* <Fab variant="extended">
        <i className="fas fa-dna mr-2"></i>
        Miễn Dịch
      </Fab> */}
      <Fab variant="extended" color="secondary">
        <i className="fas fa-vial mx-2"></i>
        Huyết Học -<i className="fas fa-virus mx-2"></i>
        Vi Sinh
      </Fab>
      {/* <Fab variant="extended">
        <i className="fas fa-virus mr-2"></i>
        Vi Sinh
      </Fab> */}
      {/* <Fab variant="extended">
        <i className="fas fa-bacon mr-2"></i>
        Ký Sinh Trùng
      </Fab> */}
      <Fab variant="extended" color="secondary">
        <AllInclusiveOutlinedIcon className={classes.extendedIcon} />
        Tất Cả
      </Fab>
    </div>
  );
}
