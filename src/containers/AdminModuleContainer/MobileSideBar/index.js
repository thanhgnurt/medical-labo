import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./styles.css";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import { ADMIN_MENUS } from "./../../../constantPages/routes";
import CloseIcon from "@material-ui/icons/Close";


function MenuMobile(props) {
  const { openMobile, classes, handleDrawerOpenMobile } = props;
  

  const listMenu = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={props.mobileMenuToggle}
      onKeyDown={props.mobileMenuToggle}
    >
      <div className={classes.closeIconContainer}><CloseIcon className={classes.iconClose} onClick={()=>handleDrawerOpenMobile()}/></div>
      <List>
      <Divider />
        {ADMIN_MENUS.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={classes.linkMobileMenu}
            activeClassName={classes.activeSelection}
          >
            <ListItem button key={item.path} to={item.path} className={classes.listItem}>
              <div className={classes.icon}>{item.icon}</div>
              <ListItemText primary={item.name} className={classes.listText} />
            </ListItem>
            <Divider />
          </NavLink>
          
        ))}
      </List>
      {/* <Divider /> */}
    </div>
  );

  return (
    <div className={classes.menuMobile}>
      <React.Fragment>
        <Drawer
          open={openMobile}
          anchor="left"
          onClose={props.mobileMenuToggle}
          variant="persistent"
        >
          {listMenu()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
export default withStyles(styles)(MenuMobile);
