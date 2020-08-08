import React from "react";
import SideBar from "./SideBar";
import ResultTest from "./ResultTest";
import Grid from "@material-ui/core/Grid";
import DatePicker from "./DatePicker";
import { withStyles } from "@material-ui/core";
import styles from './styles';

function ViewResult(props) {
  const {classes}= props;
  return (
    <Grid container>
      <Grid item md={2}  className={classes.sidebar} >
        <DatePicker />
        <SideBar />
      </Grid>
      <Grid item sm={12} xs={12} md={10} className={classes.contentResult}>
        <ResultTest resultTest={props.resultTest} />
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(ViewResult)
