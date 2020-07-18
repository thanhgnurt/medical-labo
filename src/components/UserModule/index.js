import { withStyles } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";
import styles from "./styles";

function UserModule(props) {
  const { classes } = props;
  return (
    <div className={classes.header_paper}>
      <div>
        <Carousel />
      </div>
    </div>
  );
}
export default withStyles(styles)(UserModule);
