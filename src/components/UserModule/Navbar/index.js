import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import styles from "./styles";
import ScrollTop from "./../ScrollTop";
import { MENUS } from "./../../../constantPages/menus";
import "./styles.css";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as loginActions from "./../../../redux/actions/loginSignup";
import CloseIcon from "@material-ui/icons/Close";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import MenuDesktops from "./../MenuDesktops";
import * as changeThemeActions from "./../../../redux/actions/userPape";
import {useHistory} from 'react-router-dom';
import ControlTheme from '../SomeSmallFeature/Switch';



Navbar.propTypes = {
  window: PropTypes.func,
  classes: PropTypes.object,
};

function Navbar(props) {
  let history = useHistory()
  const { window, classes, mobileMenu } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleLogin = (props, path) => {
    if (history) {
      history.push(path);
    }
    // const { actLoginToggle } = props.loginActionCreators;
    // actLoginToggle(true);
  };

  const handleChangeTheme = () => {
    props.handleChangeTheme()
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <React.Fragment>
      <div className={classes.grow}>
        <AppBar className={trigger ? classes.appBarQueryScroll : classes.defaultAppBar}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item className={classes.logo}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleChangeTheme}
                >
                  <AcUnitIcon />
                </IconButton>
                <ControlTheme/>
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
                    <MenuDesktops menus={MENUS} trigger={trigger}/>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.sectionDesktop}>
                  <IconButton
                    aria-label="show 4 new mails"
                    color="inherit"
                    className="cartMedical"
                  >
                    <Badge badgeContent={null} color="secondary">
                      <AddShoppingCartIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    onClick={() => handleLogin({ ...props }, "/login")}
                    aria-label="show 4 new mails"
                    color="inherit"
                    className={classes.iconLogin}
                  >
                    <Badge badgeContent={null} color="secondary">
                      <AccountCircle />
                    </Badge>
                  </IconButton>
                  <Button
                    size="small"
                    variant="contained"
                    className={classes.buttonLogin}
                    onClick={() => handleLogin({ ...props }, "/login")}
                  >
                    Đăng Nhập
                  </Button>
                </div>
                <div className={classes.sectionMobile}>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    className="buttonLogin"
                    onClick={() => handleLogin({ ...props }, "/login")}
                  >
                    Đăng Nhập
                  </Button>
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
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  loginActionCreators: bindActionCreators(loginActions, dispatch),
  handleChangeTheme: () => {
    dispatch(changeThemeActions.changeTheme());
  },
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(withRouter(Navbar));
