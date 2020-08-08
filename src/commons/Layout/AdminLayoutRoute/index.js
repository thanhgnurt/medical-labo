import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AdminLayoutRoute(props) {
  const { component: YourComponent, ...remainProps } = props;
  return (
    <div>
      {!localStorage.getItem("ADMIN") ? (
        <Route {...remainProps}>
          <Redirect to={{ pathname: "/admin/login" }}></Redirect>
        </Route>
      ) : (
        <Route {...remainProps}>
          <Redirect to={{ pathname: "/admin" }}></Redirect>
        </Route>
      )}
      <Route
        {...remainProps}
        render={(routeProps) => {
          return <YourComponent {...routeProps} />;
        }}
      />
    </div>
  );
}
