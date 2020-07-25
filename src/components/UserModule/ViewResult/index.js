import React from "react";
import SideBar from "./SideBar";
import ResultTest from "./ResultTest";
import Grid from "@material-ui/core/Grid";
import DatePicker from './DatePicker';

export default function ViewResult() {
  return (
    <Grid container>
      <Grid item xs={2}>
        <SideBar />
       <DatePicker/>
      </Grid>
      <Grid item xs={10} >
        <ResultTest />
      </Grid>
    </Grid>
  );
}
