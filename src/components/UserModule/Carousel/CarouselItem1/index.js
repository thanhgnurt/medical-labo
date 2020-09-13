import { 
  // Button, Container, Grid,
   withStyles } from "@material-ui/core";
// import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import React from "react";
// import { NavLink } from "react-router-dom";
import { IMAGE_HOME } from "../../../../constantPages/images";
import styles from "./styles";
// import PhoneIcon from '@material-ui/icons/Phone';
import Greeting from "../Greeting";

function CarouselItem1(props) {
  const { classes } = props;
  return (
    <div className={classes.carouselItem}>
      <div className={classes.divImage}>
        <img
          className={classes.image}
          alt="carousel 1"
          src={IMAGE_HOME.pic_3}
        ></img>
      </div>
      <div className={classes.backgroundLayer}></div>
      <Greeting/>
    </div>
  );
}
export default withStyles(styles)(CarouselItem1);
