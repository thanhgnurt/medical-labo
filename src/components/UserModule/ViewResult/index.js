// import DatePicker from "./DatePicker";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";
import PaperResultContainer from "./PaperResultContainer";
import SideBar from "./SideBar";
import styles from "./styles";
import {changeTabResultAdvisoryFeedback} from './../../../redux/actions/userActions';

function ViewResult(props) {
  const { classes, resultTest, changeTabResult } = props;
  return (
    <Grid container>
      <Grid md={2} lg={2} xl={2} item className={classes.sidebar}>
        <SideBar resultTest={resultTest} changeTabResult={changeTabResult}/>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={10}
        lg={10}
        xl={10}
        className={classes.contentResult}
      >
        <PaperResultContainer resultTest={resultTest} />
      </Grid>
    </Grid>
  );
}
const mapStateToProps= state=>({

});
const mapDispatchToProps=dispatch=>({
  changeTabResult : ()=>{
    dispatch(changeTabResultAdvisoryFeedback(0))
  }

});
export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(ViewResult));
