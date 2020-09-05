import React from "react";
import SideBar from "./SideBar";
import Grid from "@material-ui/core/Grid";
// import DatePicker from "./DatePicker";
import { withStyles } from "@material-ui/core";
import styles from './styles';
import PaperResultContainer from './PaperResultContainer';
import Table from './Table'
import ChooseView from './ChooseView'
function ViewResult(props) {
  const {classes}= props;
  return (
    <Grid container>
      <Grid item md={2}  className={classes.sidebar} >
        {/* <DatePicker /> */}
        <ChooseView/>
        <SideBar />
      </Grid>
      <Grid item sm={12} xs={12} md={10} className={classes.contentResult}>
        <PaperResultContainer resultTest={props.resultTest}/>
        <Table/>
        {/* <ResultTest  /> */}
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(ViewResult)
