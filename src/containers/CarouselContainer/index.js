import React from "react";
import Carousel from "./../../components/UserModule/Carousel";

function CarouselContainer(props) {
  return (
    <div>
      <Carousel showProgess={props.showProgess}/>
    </div>
  );
}
export default CarouselContainer;
