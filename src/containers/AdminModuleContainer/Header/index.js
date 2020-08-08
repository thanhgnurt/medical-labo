import { withStyles, Menu, ListItemIcon } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import React from "react";
import styles from "./styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from '@material-ui/icons/Settings';
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

function Header(props) {
  const { classes, open, handleDrawerOpen } = props;
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
const handleSeting = ()=>{

}

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleLogout = () => {
  localStorage.removeItem("ADMIN");
  if (history.location.pathname === "/admin") {
    history.replace("/")
  }
  history.replace(history.location.pathname);
};
  return (
    <Grid
      item
      xs={12}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.appBar}
    >
      <Grid item xs={2}>
        <IconButton
        className ={classes.buttonMenuToggle}
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          {open ? <MoreVertIcon /> : <FormatListBulletedIcon />}
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="baseline"
          
        >
          <IconButton color="secondary" aria-label="add an alarm" className={classes.menuPerson} onClick={handleClick}>
            <PersonOutlineIcon />
          </IconButton>
          <Menu
            className={classes.menuUser}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
           
            <MenuItem onClick={handleSeting}>
              <ListItemIcon className={classes.iconLogged}>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Chỉnh sửa thông tin</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon className={classes.iconLogged}>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Đăng xuất</Typography>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(Header);
