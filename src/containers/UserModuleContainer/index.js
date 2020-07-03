import React from "react";
import UserModule from "./../../components/UserModule";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as userPageActionTypes from "./../../redux/actions/userPape";
import * as groupTestActionTypes from "./../../redux/actions/listGroupTest";
import ListGroupTestContainer from "../ListGroupTestContainer";
import RegistrationTutorial from "../../components/UserModule/RegistrationTutorial";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import GlobalLoading from './../../components/GlobalLoading'

function UserModuleContainer(props) {
  const { classes } = props;
  const { mobileMenu } = props.userPape;
  const mobileMenuToggle = () => {
    const { mobileMenuToggle } = props.userPapeCreators;
    mobileMenuToggle();
  };

  return (
    <div className={classes.userPaper}>
      <UserModule mobileMenuToggle={mobileMenuToggle} mobileMenu={mobileMenu} />
      <ListGroupTestContainer />
      <RegistrationTutorial />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userPape: state.userPape,
});
const mapDispatchToProps = (dispatch) => ({
  userPapeCreators: bindActionCreators(userPageActionTypes, dispatch),
  fetchListGroupTest: bindActionCreators(groupTestActionTypes, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(UserModuleContainer);
