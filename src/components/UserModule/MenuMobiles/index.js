import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { MENUS } from "../../../constantPages/menus";
import "./styles.css";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import DoneAllIcon from '@material-ui/icons/DoneAll';


function MenuMobile(props) {
  const { mobileMenu, classes } = props;

  const listMenu = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={props.mobileMenuToggle}
      onKeyDown={props.mobileMenuToggle}
    >
      <List>
        {MENUS.map((item, index) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={classes.linkMobileMenu}
            activeClassName={classes.activeSelection}
          >
            <ListItem button key={item.to} to={item.to}>
              <div className={classes.icon}>{item.icon}</div>
              <ListItemText primary={item.name} className={classes.listText} />
            </ListItem>
          </NavLink>
        ))}
         <NavLink
            to="/ket-qua"
            className={classes.linkMobileMenu}
            activeClassName={classes.activeSelection}
          >
            <ListItem button to="/ket-qua">
              <div className={classes.icon}> <DoneAllIcon/></div>
              <ListItemText primary="Kết quả" className={classes.listText} />
            </ListItem>
          </NavLink>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.menuMobile}>
      <React.Fragment key="right">
        <Drawer
          anchor="right"
          open={mobileMenu}
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
