import { withStyles } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import { IMAGE_HOME } from "../../../../constantPages/images";
import Greeting from "../Greeting";

function CarouselItem3(props) {
  const { classes } = props;
  return (
    <div className={classes.carouselItem}>
      <div className={classes.divImage}>
        <img
          className={classes.image}
          alt="carousel 1"
          src={IMAGE_HOME.pic_4}
        ></img>
      </div>
      <div className={classes.backgroundLayer}></div>
     <Greeting/>
    </div>
  );
}
export default withStyles(styles)(CarouselItem3);
