import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { MENUS } from "../../../../constantPages/menus";
import "./styles.css";
import styles from "./styles";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";

function MenuMobile(props) {
  const { mobileMenu, classes, mobileMenuToggle } = props;
  let location = useLocation();

  const listMenus = (location, MENUS) => {
    return MENUS.map((menu) => {
      if (
        location.pathname === "/" ||
        location.pathname === "/danh-muc-xet-nghiem" ||
        location.pathname === "/luu-y-khi-lay-mau" ||
        location.pathname === "/tin-tuc-y-khoa"
      ) {
        return (
          <Link
          onClick={mobileMenuToggle}
            href=""
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={menu.scroll.offset}
            duration={500}
            key={menu.to}
            to={menu.scroll.id}
          >
            <ListItem button key={menu.to} to={menu.to}>
              <div className={classes.icon}>{menu.icon}</div>
              <ListItemText primary={menu.name} className={classes.listText} />
            </ListItem>
          </Link>
        );
      } else {
        return (
          <NavLink key={menu.to} to={{ pathname: "/", prepage: menu.to }}>
            <ListItem button key={menu.to} to={menu.to}>
              <div className={classes.icon}>{menu.icon}</div>
              <ListItemText primary={menu.name} className={classes.listText} />
            </ListItem>
          </NavLink>
        );
      }
    });
  };

  return (
    <div className={classes.menuMobile}>
      <React.Fragment key="right">
        <Drawer
          anchor="right"
          open={mobileMenu}
          onClose={props.mobileMenuToggle}
          variant="persistent"
        >
          <div
            className={classes.fullList}
            role="presentation"
            onClick={props.mobileMenuToggle}
            onKeyDown={props.mobileMenuToggle}
          >
            <List>
              {listMenus(location, MENUS)}
              <NavLink
                to="/ket-qua"
                className={classes.linkMobileMenu}
                activeClassName={classes.activeSelection}
              >
                <ListItem button to="/ket-qua">
                  <div className={classes.icon}>
                    <DoneAllIcon />
                  </div>
                  <ListItemText
                    primary="Kết quả"
                    className={classes.listText}
                  />
                </ListItem>
              </NavLink>
            </List>

            <Divider />
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
export default withStyles(styles)(MenuMobile);
