import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import { Typography, Button } from "@material-ui/core";
import MediumNews from "./MediumNews";
import MenuIconStatus from "./MenuIconStatus";

function HealthOfLife(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography align="center" variant="h5" className={classes.header}>
          Sức Khỏe & Cuộc Sống
        </Typography>
        <div className={classes.root}>
          <Grid container>
            {/* news large */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={6}>
                <div>
                  <img
                    src="./images/imgCarousel-6.jpg"
                    className={classes.imageLarge}
                    alt="news"
                  ></img>
                </div>
                <div>
                  <h6 type="button" className={classes.tittleNews}>
                    Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
                  </h6>
                </div>
                <div>
                  <div className={classes.textNews}>
                    Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa
                    Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã
                    tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn
                    diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.
                  </div>
                </div>
               <MenuIconStatus/>
              </Grid>
              <Grid item xs={12} md={6} sm={6}>
                <div>
                  <img
                    src="./images/imgCarousel-6.jpg"
                    className={classes.imageLarge}
                    alt="news"
                  ></img>
                </div>
                <div>
                  <h6 type="button" className={classes.tittleNews}>
                    Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
                  </h6>
                </div>
                <div>
                  <div className={classes.textNews}>
                    Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa
                    Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã
                    tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn
                    diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.
                  </div>
                </div>
                <MenuIconStatus/>
              </Grid>
            </Grid>
            {/* news medium */}
            <MediumNews />
          </Grid>
        </div>
        <div className={classes.seeMore}>
          <Button variant="outlined" color="secondary">
            Xem Thêm
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
}
export default withStyles(styles)(HealthOfLife);
