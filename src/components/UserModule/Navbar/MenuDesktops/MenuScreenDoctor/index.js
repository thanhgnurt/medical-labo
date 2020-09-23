import { withStyles } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles";

function MenuScreenDoctor(props) {
  const { classes, trigger, menu } = props;

  return (
    <NavLink to={menu.to}>
      <div className={trigger ? classes.menuScrolled : classes.menuMains}>
        <span className={classes.icon}>{menu.icon}</span> {menu.name}
      </div>
    </NavLink>
  );
}
export default withStyles(styles)(MenuScreenDoctor);
