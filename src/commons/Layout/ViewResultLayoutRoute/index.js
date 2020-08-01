import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavbarContainer from "../../../containers/NavbarContainer";
import FooterContainer from "../../../containers/FooterContainer";
import BottomContact from './../../../components/UserModule/Footer/Bottom'

export default function ViewResultLayoutRoute(props) {
  const { component: YourComponent, name, ...remainProps } = props;

  return (
    <Switch>
      {!localStorage.getItem("USER") ? (
        <Route {...remainProps}>
          <Redirect to={{pathname:"/login", prepage : "/ket-qua"}}></Redirect>
        </Route>
      ) : null}
      <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <div>
              <NavbarContainer {...remainProps}>
                <YourComponent {...routeProps} />
                <BottomContact />
              </NavbarContainer>
            </div>
          );
        }}
      />
    </Switch>
  );
}
