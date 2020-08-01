import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import clsx from "clsx";
import React from "react";
import { useTheme } from "@material-ui/core/styles";

import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { ADMIN_MENUS } from "./../../../constantPages/routes";

function SideBar(props) {
  const { open, handleDrawerClose, classes } = props;
  const theme = useTheme();
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
     
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
              )}
        </IconButton>
      </div>
      <Divider />
      <List className={classes.listMenu}>
        {ADMIN_MENUS.map((menu, index) => (
          <ListItem button key={menu.path}>
            <ListItemIcon  className={classes.icon}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={menu.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
        <img src="/images/bg-brain.jpg" className={classes.img_bg}></img>
        <div className={classes.bg}>

        </div>
    </Drawer>
  );
}
export default withStyles(styles)(SideBar);
