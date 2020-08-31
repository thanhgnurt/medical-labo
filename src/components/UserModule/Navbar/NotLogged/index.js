import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./styles";

NotLogged.propTypes = {
  classes: PropTypes.object,
};

function NotLogged(props) {
  let history = useHistory();
  const { classes, mobileMenu } = props;

  // const handleLogin = () => {
  //   if (history) {
  //     history.push("/login");
  //   }
  // };

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Grid item>
      <div className={classes.sectionDesktop}>

        <NavLink
          to={{
            pathname: "/login",
            prepage: history.location.pathname,
          }}
        >
          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            className={classes.iconLogin}
          >
            <Badge badgeContent={null} color="secondary">
              <AccountCircle />
            </Badge>
          </IconButton>
        </NavLink>

        <div className={classes.containerLoginButton}>
          <NavLink
            to={{
              pathname: "/login",
              prepage: history.location.pathname,
            }}
          >
            <Button
              size="small"
              variant="contained"
              className={classes.buttonLogin}
            >
              Đăng Nhập
            </Button>
          </NavLink>
        </div>
      </div>
      <div className={classes.sectionMobile}>
        <div className={classes.containerLoginButton}>
          <NavLink
            to={{
              pathname: "/login",
              prepage: history.location.pathname,
            }}
          >
            <Button
              size="small"
              variant="contained"
              color="secondary"
              className={classes.buttonLoginMobile}
            >
              Đăng Nhập
            </Button>
          </NavLink>
        </div>

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
}

export default withStyles(styles)(NotLogged);
