import { withStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import React from "react";
import { ADMIN_MENUS } from "./../../../constantPages/routes";
import styles from "./styles";

function SideBar(props) {
  const { open, handleDrawerClose, classes } = props;
  const [activeMenu, setActiveMenu] = React.useState("");
  const theme = useTheme();
  const handleOnClick = (data) => {
    setActiveMenu(data);
    console.log(data);
  };
  return (
    <div className={classes.sideBarDestop}>
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
            <ListItem
              className={menu.path === activeMenu ? classes.active : ""}
              button
              key={menu.path}
              onClick={() => handleOnClick(menu.path)}
            >
              <ListItemIcon className={classes.icon}>{menu.icon}</ListItemIcon>

              <ListItemText primary={menu.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <img
          src="/images/bg-brain.jpg"
          className={classes.img_bg}
          alt="bg-sidebar"
        ></img>
        <div className={classes.bg}></div>
      </Drawer>
    </div>
  );
}
export default withStyles(styles)(SideBar);
