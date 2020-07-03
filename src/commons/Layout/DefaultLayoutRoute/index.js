import React from 'react';
import { Route } from "react-router-dom";

export default function DefaultLayoutRoute(props) {
    const { component: YourComponent, ...remainProps } = props;
    return (
        <Route
        {...remainProps}
        render={(routeProps) => {
          return <YourComponent {...routeProps} />;
        }}
      />
    )
}
