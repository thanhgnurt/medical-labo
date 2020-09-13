import React from "react";
import { connect } from "react-redux";
import Carousel from "./../../components/UserModule/Carousel";

function CarouselContainer(props) {
  return (
    <div>
      <Carousel showProgess={props.showProgess}/>
    </div>
  );
}
const mapStateToProps = state=>({


})
export default connect(mapStateToProps, null) (CarouselContainer);
