import React from "react";
import { Route } from "react-router-dom";

export default function GroupTestLayoutRoute(props) {
  const { component: YourComponent,devideGroupTest, page,...remainProps } = props;
  console.log(devideGroupTest);
  return (
    <Route
      {...remainProps}
      render={(routeProps) => {
        return (
          <YourComponent
            {...routeProps}
            paperSelect={page}
            divideGroup={devideGroupTest}

          />
        );
      }}
    />
  );
}
