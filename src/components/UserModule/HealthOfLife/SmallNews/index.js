import { withStyles } from "@material-ui/core";
import React from "react";
import ImageTittleItem from "./../ImageTittleItem";
import styles from "./styles";

function SmallNews(props) {
  const { classes, news } = props;
  return (
    <div className={classes.smallNews}>
      <ImageTittleItem news={news} typeNews="small"/>
    </div>
  );
}

export default withStyles(styles)(SmallNews);
