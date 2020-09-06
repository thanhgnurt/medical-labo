// import DatePicker from "./DatePicker";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import PaperResultContainer from "./PaperResultContainer";
import SideBar from "./SideBar";
import styles from "./styles";
import { Route } from "react-router-dom";

function ViewResult(props) {
  const { classes, resultTest } = props;
  return (
    <Grid container>
      <Grid item md={2} xs={2} sm={2} className={classes.sidebar}>
        <SideBar resultTest={resultTest} />
      </Grid>
      <Grid item sm={10} xs={10} md={10} className={classes.contentResult}>
        <Route path="/ket-qua/:id">
          <PaperResultContainer resultTest={resultTest} />
        </Route>
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(ViewResult);
