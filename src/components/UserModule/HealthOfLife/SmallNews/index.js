import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

function SmallNews(props) {
  const { classes } = props;
  return (
    <div className={classes.smallNews}>
      <div className={classes.image}>
        <img
          src="./images/imgCarousel-6.jpg"
          className={classes.imageSmall}
          alt="news"
        ></img>
      </div>
      <div className={classes.tittleContainer}>
        <h6 type="button" className={classes.tittleNews}>
          Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
        </h6>
      </div>
    </div>
  );
}

export default withStyles(styles)(SmallNews);
