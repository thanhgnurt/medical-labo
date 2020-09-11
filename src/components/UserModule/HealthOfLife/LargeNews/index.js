import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ImageTittleItem from "./../ImageTittleItem";
import MenuIconStatus from "./../MenuIconStatus";
import styles from "./styles";

function LargeNews(props) {
  const { classes, listNews } = props;
  const showLargeNews = (listNews) => {
    let xhtml = [];
    if (listNews.length >= 2) {
      for (let i = 0; i < 2; i++) {
        xhtml.push(
          <Grid item xs={12} md={6} sm={6} key={i}>
            <ImageTittleItem news={listNews[i]} typeNews="large" />
            <div>
              <div className={classes.textNews}>{listNews[i].description}</div>
            </div>
            <MenuIconStatus />
          </Grid>
        );
      }
    }
    return xhtml;
  };
  return (
    <Grid container spacing={2}>
      {showLargeNews(listNews)}
    </Grid>
  );
}
export default withStyles(styles)(LargeNews);
