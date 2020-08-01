import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import styles from "./styles";
import Paper from "@material-ui/core/Paper";

function Content(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper />
    </div>
  );
}
export default withStyles(styles)(Content);
