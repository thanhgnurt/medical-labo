import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "redux";
import LoadingIcon from "./../../assets/images/loading.gif";

function GlobalLoading(props) {
  const { classes, showLoading } = props;
  let xhtml = null;
  if (showLoading) {
    xhtml = (
      <div className={classes.globalLoading}>
        <div className={classes.contentIcon}>
          <img
            src={LoadingIcon}
            alt="loading icon"
            className={classes.icon}
          ></img>
        </div>
      </div>
    );
  }
  return xhtml;
}
const mapStateToProps = (state) => ({
  showLoading: state.ui.showLoading,
  listGroupTest: state.listGroupTest,
});

const withConnect = connect(mapStateToProps, null);
export default compose(withStyles(styles), withConnect)(GlobalLoading);
