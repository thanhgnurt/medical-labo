import { Button, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import * as Scroll from "react-scroll";
import LargeNews from "./LargeNews";
import MediumNews from "./MediumNews";
import styles from "./styles";

const showListNews = (listNews) => {
  let xhtml = null;
  if (listNews.length > 0) {
    xhtml = (
      <Grid container>
        {/* news large */}
        <LargeNews listNews={listNews} />
        {/* medium news */}
        <MediumNews listNews={listNews} />
      </Grid>
    );
  }
  return xhtml;
};

function HealthOfLife(props) {
  const { classes, listNews } = props;

  return (
    <Scroll.Element name="NEWS_MEDICAL">
      <div id="ID_NEWS_MEDICAL" className={classes.heathOfLife}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <Typography align="center" variant="h5" className={classes.header}>
              Sức Khỏe & Cuộc Sống
            </Typography>
            <div className={classes.root}>
              {showListNews(listNews.listNews)}
            </div>
            <div className={classes.seeMore}>
              <Button variant="outlined" color="secondary">
                Xem Thêm
              </Button>
            </div>
          </Container>
        </React.Fragment>
      </div>
    </Scroll.Element>
  );
}
export default withStyles(styles)(HealthOfLife);
