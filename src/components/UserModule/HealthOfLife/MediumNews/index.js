import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import MenuIconStatus from "../MenuIconStatus";
import SmallNews from "../SmallNews";
import ImageTittleItem from "./../ImageTittleItem";
import styles from "./styles";

function MediumNews(props) {
  const { classes, listNews } = props;
  const showSmallNews = (listNews) => {
    let xhtml = [];
    if (listNews.length >= 8) {
      for (let i = 1; i <= 4; i++) {
        xhtml.push(<SmallNews key={i} news={listNews[i + 3]} />);
      }
    }
    return xhtml;
  };
  const showMediumNews = (listNews) => {
    let xhtml = [];
    if (listNews.length >= 4) {
      for (let i = 2; i <= 3; i++) {
        xhtml.push(
          <Grid item xs={6} sm={4} md={4} key={i}>
            <ImageTittleItem news={listNews[i]} typeNews="medium" />
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
    <Grid container spacing={2} mt={2}>
      {showMediumNews(listNews)}


      <Grid item md={4} sm={4} xs={12}>
        {/* small news */}
        {showSmallNews(listNews)}
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(MediumNews);
