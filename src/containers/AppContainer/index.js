import React from "react";
import styles from "./styles";
import { ADMIN_ROUTES, USER_ROUTES } from "../../constantPages/routes";
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { themeLight, themeDark } from "../../commons/Theme";
import { Switch } from "react-router-dom";
import AdminLayoutRoute from "../../commons/Layout/AdminLayoutRoute";
import UserLayoutRoute from "../../commons/Layout/UserLayoutRoute";
import { connect } from "react-redux";
import { compose } from "redux";

function AppContainer(props) {
  const { theme } = props

  const renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => { 
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  };
  const renderUserRoutes = () => {
    let xhtml = null;
    xhtml = USER_ROUTES.map((route) => {
      return (
        <UserLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  };

  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <CssBaseline />
    
        <Switch >
        {renderAdminRoutes()}
        {renderUserRoutes()}
      </Switch>
 
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(AppContainer);
