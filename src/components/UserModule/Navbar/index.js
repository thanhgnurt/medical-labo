import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { NavLink, useLocation } from "react-router-dom";
import { compose } from "redux";
import { MENUS } from "./../../../constantPages/menus";
import * as changeThemeActions from "./../../../redux/actions/userPape";
import Progess from "./../../Progess";
import ScrollTop from "./../ScrollTop";
import ButtonChangeTheme from "./ButtonChangeTheme";
import Logged from "./Logged";
import MenuDesktops from "./MenuDesktops";
import NotLogged from "./NotLogged";
import styles from "./styles";
import "./styles.css";

Navbar.propTypes = {
  window: PropTypes.func,
  classes: PropTypes.object,
  userLoginStatus: PropTypes.bool,
  handleChangeTheme: PropTypes.func,
};

function Navbar(props) {
  let location = useLocation();
  const { window, classes, showProgess } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  let typeUser =JSON.parse(localStorage.getItem("USER")) ;
  if(typeUser){
    typeUser = typeUser.maLoaiNguoiDung
  }

  const changeTheme = () => {
    props.handleChangeTheme();
  };

  const viewResultNavLink = () => {
    if (typeUser) {
      // let user = JSON.parse(localStorage.getItem("USER"));
      return (
        <NavLink to="/ket-qua">
          <div className={trigger ? classes.menuScrolled : classes.menuMains}>
            <span
              className={location.pathname.startsWith("/ket-qua")? classes.result : ""}
            >
              Kết Quả
            </span>
          </div>
        </NavLink>
      );
    } else {
      return (
        <NavLink to={{ pathname: "/login", prepage: "/ket-qua" }}>
          <div className={trigger ? classes.menuScrolled : classes.menuMains}>
            Kết Quả
          </div>
        </NavLink>
      );
    }
  };

  return (
    <div id="ID_HOME">
      <React.Fragment>
        <Progess showProgess={showProgess} />
        <div className={classes.grow}>
          <AppBar
            className={
              trigger ? classes.appBarQueryScroll : classes.defaultAppBar
            }
          >
            <Toolbar>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item className={classes.logo}>
                  {/* <a href="/">
                  <img className={classes.imgLogo } src="/images/iconLogo.png" alt="icon logo"></img>
                  </a> */}

                  <div className={classes.buttonTheme}>
                    <ButtonChangeTheme
                      changeTheme={changeTheme}
                      trigger={trigger}
                    />
                  </div>
                  <a href="/" className={classes.name}>
                    <h4>
                      <span className={classes.charUnder}>L</span>ab
                    </h4>
                  </a>
                </Grid>
                <Grid item>
                  <div className={classes.menu_list}>
                    <Grid
                      container
                      spacing={1}
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <MenuDesktops menus={MENUS} trigger={trigger} />
                      {typeUser==="QuanTri" && location.pathname.startsWith("/ket-qua") ?"":viewResultNavLink()}
                    </Grid>
                  </div>
                </Grid>
                {/* render UI when not login */}
                {localStorage.getItem("USER") ? (
                  <Logged
                    mobileMenuToggle={props.mobileMenuToggle}
                    mobileMenu={props.mobileMenu}
                  />
                ) : (
                  <NotLogged
                    mobileMenuToggle={props.mobileMenuToggle}
                    mobileMenu={props.mobileMenu}
                  />
                )}
              </Grid>
            </Toolbar>
          </AppBar>
        </div>

        <Toolbar id="back-to-top-anchor" />
        <Container>
          <Box my={2}></Box>
        </Container>
        <ScrollTop {...props} trigger={trigger} />
      </React.Fragment>
    </div>
  );
}

const mapStateToProps = (state) => ({
  // userLoginStatus: state.userReducer.userLogin,
});
const mapDispatchToProps = (dispatch) => ({
  handleChangeTheme: () => {
    dispatch(changeThemeActions.changeTheme());
  },
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(withRouter(Navbar));
