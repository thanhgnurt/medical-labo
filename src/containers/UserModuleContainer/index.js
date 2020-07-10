import React from "react";
import UserModule from "./../../components/UserModule";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as userPageActionTypes from "./../../redux/actions/userPape";
import ListGroupTestContainer from "../ListGroupTestContainer";
import RegistrationTutorial from "../../components/UserModule/RegistrationTutorial";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { fetchListGroupTestRequest } from "./../../redux/actions/listGroupTest";
import { useEffect } from "react";
import HealthOfLifeContainer from "../HealthOfLifeContainer";
import LinePager from "../../components/UserModule/LinePager";
import Progess from "../../components/Progess";
import FooterContainer from "../FooterContainer";
// import { Switch, Route } from "react-router-dom";
// import SignupPageContainer from "../SignupPageContainer";
// import LoginPageContainer from "../LoginPageContainer";

function UserModuleContainer(props) {
  const { classes, showLoading } = props;
  const { mobileMenu } = props.userPape;
  const mobileMenuToggle = () => {
    const { mobileMenuToggle } = props.userPapeCreators;
    mobileMenuToggle();
  };

  const { fetchListGroupTest } = props;
  useEffect(() => {
    fetchListGroupTest();
  }, [fetchListGroupTest]);

  return (
    <div className={classes.userPaper}>
      <Progess showProgess={showLoading} />
      <UserModule mobileMenuToggle={mobileMenuToggle} mobileMenu={mobileMenu} />
      <ListGroupTestContainer />
      <LinePager />
      <RegistrationTutorial />
      <LinePager />
      <HealthOfLifeContainer />
      <LinePager />
      <FooterContainer />
   
    </div>
  );
}

const mapStateToProps = (state) => ({
  userPape: state.userPape,
  showLoading: state.ui.showLoading,
});
const mapDispatchToProps = (dispatch) => ({
  userPapeCreators: bindActionCreators(userPageActionTypes, dispatch),
  // fetchListGroupTest: bindActionCreators(groupTestActionTypes, dispatch),
  fetchListGroupTest: () => {
    dispatch(fetchListGroupTestRequest());
  },
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(UserModuleContainer);
