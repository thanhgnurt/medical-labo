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
      {/* <div className={classes.content}>
        <div className={classes.text}>
          <h2>Vì sao nên xét nghiệm máu tại nhà ? </h2>
          <div className={classes.description}>
            Xét nghiệm máu tại nhà với nhiều lợi ích đáng ghi nhận
          </div>
          <Container maxWidth="md">
            <Grid container className={classes.gridContainer}>
              <Grid item lg={6}>
                <ul className={classes.listAsk}>
                  <li>Tiện lợi, Hỗ trợ xem kết quả ngay trên website</li>
                  <li>Nhanh chóng và chính xác</li>
                  <li>Được hỗ trợ tư vấn đọc kết quả xét nghiệm</li>
                </ul>
              </Grid>
              <Grid item lg={6}>
                <ul className={classes.listAsk}>
                  <li>Tiết kiệm thời gian</li>
                  <li>Chi phí hợp lý</li>
                  <li>Được hỗ trợ tư vấn đọc kết quả xét nghiệm</li>
                </ul>
              </Grid>
            </Grid>
          </Container>
          <div className={classes.setSchedule}>
            <NavLink to="/dat-lich/001">
               <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<AlarmOnIcon/>}
            
            >
              Đặt lịch ngay
            </Button>
            </NavLink>
           
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<PhoneIcon/>}
            > 
           
              Liên hệ 
            </Button>
          </div>
        </div>
      </div> */}

      <Greeting/>
    </div>
  );
}
export default withStyles(styles)(CarouselItem1);
