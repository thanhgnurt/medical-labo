import React from "react";
import { Route, Redirect,Switch, useHistory  } from "react-router-dom";
import SignupPageContainer from "./../../../containers/SignupPageContainer";
import LoginPageContainer from "./../../../containers/LoginPageContainer";

export default function UserLayoutRoute(props) {
  const { component: YourComponent, ...remainProps } = props;
  let history = useHistory();
  return (
    <Switch>
      <Route path="/signup">
        <SignupPageContainer />
      </Route>
      <Route path="/login">
        <LoginPageContainer />
      </Route>
      <Route
        {...remainProps}
        render={(routeProps) => {
          return <YourComponent {...routeProps} />;
        }}
      />
{/* 
      <Route
        {...remainProps}
        render={(routeProps) =>
          history.location.pathname === "/" ? (
            <YourComponent {...routeProps} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                // state: { from: location }
              }}
            />
          )
        }
      /> */}
    </Switch>
  );
}
