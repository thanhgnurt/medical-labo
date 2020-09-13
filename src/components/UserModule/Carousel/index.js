import { withStyles } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React from "react";
import Slider from "react-slick";
import CarouselItem1 from "./CarouselItem1";
import CarouselItem2 from "./CarouselItem2";
import CarouselItem3 from "./CarouselItem3";
import CarouselItem4 from "./CarouselItem4";
// import Greeting from "./Greeting";
import styles from "./styles";
import "./styles.css";
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <ChevronRightIcon className="iconPre" size="small" />
      {/* <img src="/images/next-session.png" alt="movie-2" /> */}
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="./images/back-session.png" alt="movie-2" />
    </div>
  );
}

function Carousel(props) {
  const { classes } = props;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    cssEase: "linear",
    className: "center",
    // centerMode: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rows: 1,
    centerPadding: "60px",
    slidesToShow: 1,
  };
  return (
    
      <div className="carousel">
        <Slider {...settings}>
          <div className={classes.carouselItem}>
            <CarouselItem1 />
          </div>
          <div className={classes.carouselItem}>
            <CarouselItem2 />
          </div>
          <div className={classes.carouselItem}>
            <CarouselItem3 />
          </div>
          <div className={classes.carouselItem}>
            <CarouselItem4 />
          </div>
        </Slider>
        {/* <Greeting/> */}
      </div>
  
  );
}

export default withStyles(styles)(Carousel);
