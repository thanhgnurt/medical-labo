import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import MenuIconStatus from "../MenuIconStatus";

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
      <div>
        <NavLink to={`/tin-tuc-y-khoa/${news.tittle}`}>
          <h6 className={cssTittle}>{news.tittle}</h6>
        </NavLink>
        {typeNews === "small" ?<div className={classes.iconSmallNews}><MenuIconStatus/></div> : ""}
      </div>
    </div>
  );
}
export default withStyles(styles)(ImageTittleItem);
