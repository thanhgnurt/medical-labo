import React from "react";
import { Route, Switch } from "react-router-dom";
import NavbarContainer from "./../../../containers/NavbarContainer";
import FooterContainer from "./../../../containers/FooterContainer"

export default function SetScheduleLayoutRoute(props) {
  const { component: YourComponent, name, ...remainProps } = props;

  return (
    <Switch>
      <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <div>
              <NavbarContainer {...remainProps}>
                <YourComponent {...routeProps} />
                <FooterContainer/>
              </NavbarContainer>
            </div>
          );
        }}
      />
      <Route 
        {...remainProps}
        render={(routeProps) => {
          return (
            <div>
              <NavbarContainer {...remainProps}>
                <YourComponent {...routeProps} />
                <FooterContainer/>
              </NavbarContainer>
            </div>
          );
        }}
      />
    </Switch>
  );
}
