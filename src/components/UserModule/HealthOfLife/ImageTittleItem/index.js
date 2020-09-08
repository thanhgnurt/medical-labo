import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

function ImageTittleItem(props) {
  const { classes, news, typeNews } = props;
  let cssImage = "";
  let cssTittle = "";
  switch (typeNews) {
    case "large":
      cssImage = classes.imageLarge;
      cssTittle = classes.tittleNews;
      break;
    case "medium":
      cssImage = classes.imageMedium;
      cssTittle = classes.tittleNews;
      break;
    case "small":
      cssImage = classes.imageSmall;
      cssTittle = classes.tittleNewsSmall;
      break;
    default:
      break;
  }
  return (
    <div>
      <div>
        <img src={news.image} className={cssImage} alt="news"></img>
      </div>
      <NavLink to={`/tin-tuc-y-khoa/${news.tittle}`}>
        <h6 className={cssTittle}>{news.tittle}</h6>
      </NavLink>
    </div>
  );
}
export default withStyles(styles)(ImageTittleItem);
