import React from "react";
import { Route, Switch} from "react-router-dom";

export default function LoginSignupRoute(props) {
  const { component: YourComponent, ...remainProps } = props;
  return (
    <Switch>
     
      <Route
        {...remainProps}
        render={(routeProps) => {
          return <YourComponent {...routeProps} />;
        }}
      />

    </Switch>
  );
}
