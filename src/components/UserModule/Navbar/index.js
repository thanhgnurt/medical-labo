import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import ControlTheme from "../SomeSmallFeature/Switch";
import { MENUS } from "./../../../constantPages/menus";
import * as changeThemeActions from "./../../../redux/actions/userPape";
import MenuDesktops from "./../MenuDesktops";
import ScrollTop from "./../ScrollTop";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import styles from "./styles";
import "./styles.css";
import { NavLink, useLocation } from "react-router-dom";


Navbar.propTypes = {
  window: PropTypes.func,
  classes: PropTypes.object,
  userLoginStatus: PropTypes.bool,
  handleChangeTheme: PropTypes.func,
};

function Navbar(props) {
  let location = useLocation()
  const { window, classes } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const changeTheme = () => {
    props.handleChangeTheme();
  };

  const viewResultNavLink = () => {
    if (localStorage.getItem("USER")) {
      // let user = JSON.parse(localStorage.getItem("USER"));
      return (
        <NavLink to="/ket-qua">
          <div className={trigger ? classes.menuScrolled : classes.menuMains}>
            <span className={location.pathname==="/ket-qua" ? classes.result : ""}>
              Kết Quả
              </span>
          </div>
        </NavLink>
      );
    } else {
      return (
        <NavLink to={{pathname:"/login", prepage : "/ket-qua"}}>
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
                  <ControlTheme changeTheme={changeTheme} />
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
                      {viewResultNavLink()}
                      {/* <NavLink to="/ket-qua/:id">
                        <div
                          className={
                            trigger ? classes.menuScrolled : classes.menuMains
                          }
                        >
                          Kết Quả
                        </div>
                      </NavLink> */}
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
