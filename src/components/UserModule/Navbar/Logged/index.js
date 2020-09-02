import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import NotLogged from "../NotLogged";
import styles from "./styles";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "rgb(0, 0, 0, 0.7)",
    color: "rgb(255, 255, 255, 0.9)",
    boxShadow: theme.shadows[1],
    marginTop: 2,
    fontSize: 11,
    "& p":{
      textTransform :"capitalize",
      fontSize : 14,
      color : "rgb(255, 255, 255, 0.6)"
    }
  },
}))(Tooltip);

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

  const showAccount=(user)=>{
    let xhtml = "";
    xhtml = (
      <div>
       <h6>Tài khoản</h6>
       <p>{user.hoTen}</p>
      </div>
    )
    return xhtml
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSeting = () => {};
  const handleLogout = () => {
    localStorage.removeItem("USER");
    if (history.location.pathname === "/ket-qua") {
      history.replace("/");
    }
    history.replace(history.location.pathname);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  if (localStorage.getItem("USER")) {
    let user = JSON.parse(localStorage.getItem("USER"));
    return (
      <Grid item>
        <div className={classes.sectionDesktop}>
          <LightTooltip title={showAccount(user)}>
            <IconButton
              className={classes.containerAvatar}
              onClick={handleClick}
            >
              {/* <Avatar size="medium" className={classes.avatar} >
                {user.hoTen.slice(0, 1).toUpperCase()}
                <AccountCircleOutlinedIcon/>
              </Avatar> */}
              <Avatar className={classes.avatar} alt="Remy Sharp" src="/images/user-icon.png" />
            </IconButton>
          </LightTooltip>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton className={classes.containerAvatar} onClick={handleClick}>
            {/* <Avatar size="small" className={classes.avatar} type="button">
              {user.hoTen.slice(0, 1).toUpperCase()}
            </Avatar> */}
            <Avatar className={classes.avatar} alt="Remy Sharp" src="/images/user-icon.png" />
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
