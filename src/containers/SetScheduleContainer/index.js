import React from "react";
import SetSchedule from "./../../components/UserModule/ListGroupTest/SetSchedule";
import { animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {IMAGE_HOME} from './../../constantPages/images'

function SetScheduleContainer(props) {
  scroll.scrollTo(0);
  let { id } = useParams();
  const { listGroupTest } = props;
  let groupTest = {};
  if (id==="carousel") {
    groupTest={
      image : IMAGE_HOME.imageDefault
    }
    
  }
  const findId = (id) => {
    for (let i = 0; i < listGroupTest.length; i++) {
      if (listGroupTest[i].id === id) {
        return i;
      }
    }
  };
  if (listGroupTest.length > 0 && id!=="carousel") {
    groupTest = listGroupTest[findId(id)];
  }

  return <SetSchedule groupTest={groupTest} />;
}
const mapStateToProps = (state) => ({
  listGroupTest: state.listGroupTest.listGroupTest,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetScheduleContainer);
