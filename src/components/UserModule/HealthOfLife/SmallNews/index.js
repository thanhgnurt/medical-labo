import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

function SmallNews(props) {
  const { classes, listNews } = props;
  return (
    <div className={classes.smallNews}>
      <div className={classes.image}>
        <img
          src={listNews.image}
          className={classes.imageSmall}
          alt="news"
        ></img>
      </div>
      <div className={classes.tittleContainer}>
        <h6 className={classes.tittleNews}>
          {listNews.tittle}
        </h6>
      </div>
    </div>
  );
}

export default withStyles(styles)(SmallNews);
