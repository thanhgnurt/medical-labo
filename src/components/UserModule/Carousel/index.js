import React, { Component } from "react";
import Slider from "react-slick";
import "./styles.css";
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="/images/next-session.png" alt="movie-2" />
    </div>
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

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      // speed: 3000,
      // autoplaySpeed: 3000,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img src="./images/imgCarousel-1.jpg" alt="movie-2" />
          </div>
          <div>
            <img src="./images/imgCarousel-1.jpg" alt="movie-2" />
          </div>
          <div>
            <img src="./images/imgCarousel-1.jpg" alt="movie-2" />
          </div>
          <div>
            <img src="./images/imgCarousel-1.jpg" alt="movie-2" />
          </div>
          <div>
            <img src="./images/imgCarousel-1.jpg" alt="movie-2" />
          </div>
        </Slider>
      </div>
    );
  }
}
