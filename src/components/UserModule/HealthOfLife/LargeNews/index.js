import React from 'react';
import MenuIconStatus from "./../MenuIconStatus";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core';
import styles from './styles';



function LargeNews(props) {
    const {classes, listNews}= props;
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={6}>
          <div>
            <img
              src={listNews[0].image}
              className={classes.imageLarge}
              alt="news"
            ></img>
          </div>
          <NavLink to="/tin-tuc-&-cuoc-song/id">
            <h6 className={classes.tittleNews}>
              {listNews[0].tittle}
            </h6>
          </NavLink>

          <div>
            <div className={classes.textNews}>
              {listNews[0].description}
            </div>
          </div>
          <MenuIconStatus />
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
          <div>
            <img
              src={listNews[1].image}
              className={classes.imageLarge}
              alt="news"
            ></img>
          </div>
          <NavLink to="/tin-tuc-&-cuoc-song/id">
            <h6 className={classes.tittleNews}>
              {listNews[1].tittle}
            </h6>
          </NavLink>
          <div>
            <div className={classes.textNews}>
              {listNews[1].description}
            </div>
          </div>
          <MenuIconStatus />
        </Grid>
      </Grid>
    )
}
export default withStyles(styles)(LargeNews)