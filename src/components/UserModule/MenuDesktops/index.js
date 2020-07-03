import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { NavLink } from "react-router-dom";

function MenuDesktops(props) {
    const {classes, menus, trigger}= props
    return menus.map((menu) => {
        return (
          <NavLink
            to={menu.to}
            className={trigger? classes.menuScrolled : classes.menuMains}
            activeClassName={classes.selectedMenu}
            key={menu.to}
          >
            {menu.name}
          </NavLink>
        );
      });
}

export default withStyles(styles)(MenuDesktops)
