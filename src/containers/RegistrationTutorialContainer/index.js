import React from "react";
import * as Scroll from "react-scroll";
import RegistrationTutorial from "../../components/UserModule/RegistrationTutorial";

export default function RegistrationTutorialContainer() {
  return (
    <Scroll.Element name="NOTE">
      <div id="ID_NOTE">
        <RegistrationTutorial />
      </div>
    </Scroll.Element>
  );
}
