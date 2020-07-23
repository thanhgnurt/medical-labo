import React from "react";
import SetSchedule from "./../../components/UserModule/SetSchedule";
import { animateScroll as scroll } from "react-scroll";

export default function SetScheduleContainer() {
  scroll.scrollTo(0);

  return <SetSchedule />;
}
