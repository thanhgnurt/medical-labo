import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import SmallNews from "../SmallNews";
import Grid from "@material-ui/core/Grid";
import MenuIconStatus from "../MenuIconStatus";

function MediumNews(props) {
  const { classes } = props;
  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={6} sm={4} md={4}>
        <div>
          <img
            src="./images/imgCarousel-6.jpg"
            className={classes.imageMedium}
            alt="news"
          ></img>
        </div>
        <div>
          <div type="button" className={classes.tittleNews}>
            Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
          </div>
        </div>
        <div>
          <div className={classes.textNews}>
            Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên
            Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer
            đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt
            đại cảnh cháy nổ hoành tráng.
          </div>
        </div>
        <MenuIconStatus />
      </Grid>
      <Grid item xs={6} sm={4} md={4}>
        <div>
          <img
            src="./images/imgCarousel-6.jpg"
            className={classes.imageMedium}
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
            Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên
            Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer
            đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt
            đại cảnh cháy nổ hoành tráng.
          </div>
        </div>
        <MenuIconStatus />
      </Grid>

      <Grid item md={4} sm={4} xs={12} container>

        {/* small news */}
        <SmallNews />
        <SmallNews />
        <SmallNews />
        <SmallNews />
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(MediumNews);
