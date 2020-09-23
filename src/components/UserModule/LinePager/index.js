import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

function LinePager(props) {
  const { classes } = props;
  return (
    <Container maxWidth="lg">
      <Typography component="div" className={classes.linePager} />
    </Container>
  );
}

export default withStyles(styles)(LinePager);
