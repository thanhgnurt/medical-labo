import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ImageTittleItem from "./../ImageTittleItem";
import MenuIconStatus from "./../MenuIconStatus";
import styles from "./styles";

function LargeNews(props) {
  const { classes, listNews } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} sm={6}>
        <ImageTittleItem news={listNews[0]} typeNews="large" />
        <div>
          <div className={classes.textNews}>{listNews[0].description}</div>
        </div>
        <MenuIconStatus />
      </Grid>
      <Grid item xs={12} md={6} sm={6}>
        <ImageTittleItem news={listNews[1]} typeNews="large" />
        <div>
          <div className={classes.textNews}>{listNews[1].description}</div>
        </div>
        <MenuIconStatus />
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(LargeNews);
