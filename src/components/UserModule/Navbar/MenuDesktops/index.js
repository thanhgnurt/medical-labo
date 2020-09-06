import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { Link } from "react-scroll";
import { useLocation, NavLink } from "react-router-dom";

function MenuDesktops(props) {
  const { classes, menus, trigger } = props;
  let location = useLocation();
 
  return menus.map((menu) => {
    if (
      location.pathname === "/" ||
      location.pathname === "/danh-muc-xet-nghiem" ||
      location.pathname === "/luu-y-khi-lay-mau" ||
      location.pathname === "/tin-tuc-y-khoa"
    ) {
      return (
        <Link
          key={menu.to}
          href=""
          to={menu.scroll.id}
          activeClass={classes.active}
          spy={true}
          smooth={true}
          offset={menu.scroll.offset}
          duration={400}
        >
          <div className={trigger ? classes.menuScrolled : classes.menuMains}>
           {menu.name}
          </div>
        </Link>
      );
    } else {
      return (
        <NavLink key={menu.to} to={{ pathname: "/", prepage: menu.to }}>
          <div className={trigger ? classes.menuScrolled : classes.menuMains}>
          {location.pathname.startsWith("/tin-tuc-y-khoa") && menu.to === "/tin-tuc-y-khoa" ? (
              <span className={classes.news}>{menu.name}</span>
            ) : (
              menu.name
            )}
          </div>
        </NavLink>
      );
    }
  });
}

export default withStyles(styles)(MenuDesktops);
