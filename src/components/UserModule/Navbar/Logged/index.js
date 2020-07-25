import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import NotLogged from "../NotLogged";
import styles from "./styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from '@material-ui/icons/Settings';

Logged.propTypes = {
  window: PropTypes.func,
  classes: PropTypes.object,
};

function Logged(props) {
  const { classes, mobileMenu } = props;
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
const handleSeting = ()=>{

}
  const handleLogout = () => {
    localStorage.removeItem("USER");
    if (history.location.pathname === "/ket-qua") {
      history.replace("/")
    }
    history.replace(history.location.pathname);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  if (localStorage.getItem("USER")) {
    let user = JSON.parse(localStorage.getItem("USER"));
    return (
      <Grid item>
        <div className={classes.sectionDesktop}>
          <IconButton className={classes.containerAvatar} onClick={handleClick}>
            <Avatar size="small" className={classes.avatar} type="button">
              {user.hoTen.slice(0, 1).toUpperCase()}
            </Avatar>
          </IconButton>
          <Typography className={classes.hello}>
           Hello ! {user.hoTen}
          </Typography>
         
        </div>
        <div className={classes.sectionMobile}>
          <IconButton className={classes.containerAvatar} onClick={handleClick}>
            <Avatar size="small" className={classes.avatar} type="button">
              {user.hoTen.slice(0, 1).toUpperCase()}
            </Avatar>
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
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={props.mobileMenuToggle}
            color="inherit"
          >
            {mobileMenu ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </Grid>
    );
  } else {
    return <NotLogged />;
  }
}

export default withStyles(styles)(Logged);
