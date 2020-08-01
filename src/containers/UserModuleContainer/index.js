import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import Progess from "../../components/Progess";
import LinePager from "../../components/UserModule/LinePager";
import FooterContainer from "../FooterContainer";
import HealthOfLifeContainer from "../HealthOfLifeContainer";
import ListGroupTestContainer from "../ListGroupTestContainer";
import NavbarContainer from "../NavbarContainer";
import UserModule from "./../../components/UserModule";
import { fetchListGroupTestRequest } from "./../../redux/actions/listGroupTest";
import * as userPageActionTypes from "./../../redux/actions/userPape";
import styles from "./styles";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import RegistrationTutorialContainer from "../RegistrationTutorialContainer";

function UserModuleContainer(props) {
  const { classes, showLoading } = props;
  let location = useLocation();

  const { fetchListGroupTest } = props;
  useEffect(() => {
    if (location.prepage !== "/") {
      switch (location.prepage ) {
        case "/":
          setTimeout(() => {
            scroll.scrollTo(0);
          }, 700);

          break;
        case "/danh-muc-xet-nghiem":
          setTimeout(() => {
            scroller.scrollTo("CATEGORY_TEST", {
              duration: 1500,
              delay: 100,
              smooth: true,
              offset: -65,
            });
          }, 700);
          break;
        case "/luu-y-khi-lay-mau":
          setTimeout(() => {
            scroller.scrollTo("NOTE", {
              duration: 1500,
              delay: 100,
              smooth: true,
              offset: -65,
            });
          }, 700);
          break;
        case "/tin-tuc-y-khoa":
          setTimeout(() => {
            scroller.scrollTo("NEWS_MEDICAL", {
              duration: 1500,
              delay: 100,
              smooth: true,
              offset: -75,
            });
          }, 700);
          break;

        default:
          break;
      }
    }
    fetchListGroupTest();
  }, [fetchListGroupTest,location.prepage]);

  return (
    <div className={classes.userPaper}>
      <Progess showProgess={showLoading} />
      <NavbarContainer />
      <UserModule />
      <ListGroupTestContainer />
      <LinePager />
      <RegistrationTutorialContainer />
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
  fetchListGroupTest: () => {
    dispatch(fetchListGroupTestRequest());
  },
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(UserModuleContainer);
