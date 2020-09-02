import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import SmallNews from "../SmallNews";
import Grid from "@material-ui/core/Grid";
import MenuIconStatus from "../MenuIconStatus";

function MediumNews(props) {
  const { classes,listNews } = props;
  const showSmallNews = listNews =>{
    let xhtml = [];
    for(let i = 1;i<=4; i++){
      xhtml.push(<SmallNews key ={i} listNews={listNews[i+3]}/>) 
    }
    return xhtml;
  }
  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={6} sm={4} md={4}>
        <div>
          <img
            src={listNews[2].image}
            className={classes.imageMedium}
            alt="news"
          ></img>
        </div>
        <div>
          <h6 className={classes.tittleNews}>
            {listNews[2].tittle}
          </h6>
        </div>
        <div>
          <div className={classes.textNews}>
            {listNews[2].description}
          </div>
        </div>
        <MenuIconStatus />
      </Grid>
      <Grid item xs={6} sm={4} md={4}>
        <div>
          <img
            src={listNews[3].image}
            className={classes.imageMedium}
            alt="news"
          ></img>
        </div>
        <div>
          <h6 className={classes.tittleNews}>
            {listNews[3].tittle}
          </h6>
        </div>
        <div>
          <div className={classes.textNews}>
            {listNews[3].description}
          </div>
        </div>
        <MenuIconStatus />
      </Grid>

      <Grid item md={4} sm={4} xs={12}>

        {/* small news */}
        {showSmallNews(listNews)}
  
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(MediumNews);
