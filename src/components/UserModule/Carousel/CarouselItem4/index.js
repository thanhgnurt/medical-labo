import { withStyles } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import { IMAGE_HOME } from "../../../../constantPages/images";

function CarouselItem4(props) {
  const { classes } = props;
  return (
    <div className={classes.carouselItem}>
      <div className={classes.divImage}>
        <img
          className={classes.image}
          alt="carousel 1"
          src={IMAGE_HOME.pic_5}
        ></img>
      </div>
      <div className={classes.backgroundLayer}></div>
      <div className={classes.content}>
        <h2>Vì sao nên xét nghiệm máu tại nhà ?</h2>
      </div>
    </div>
  );
}
export default withStyles(styles)(CarouselItem4);
