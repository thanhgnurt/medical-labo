import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarContainer from "../../../containers/NavbarContainer";
import FooterContainer from "./../../../containers/FooterContainer";
// import Bottom from './../../../components/UserModule/Footer/Bottom'

export default function ViewResultLayoutRoute(props) {
  const { component: YourComponent, name, ...remainProps } = props;

  return (
    <div>
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
                {/* <Bottom/> */}
                <FooterContainer />
              </NavbarContainer>
            </div>
          );
        }}
      />
    </div>
  );
}
