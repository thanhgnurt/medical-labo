import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

function Bottom(props) {
  const { classes } = props;
  const location = useLocation();
  return (
    <div className={classes.background}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <div className={classes.bottom}>
            <Grid container spacing={1} className={classes.content}>
              <Grid item xs={12} sm={12} md={7}>
                <div className={classes.text}>
                  Copyright © 2020 by Thanhgnurt |{" "}
                  {location.pathname !== "/" ? (
                    <NavLink className={classes.medical} to="/">
                      Medical Lab
                    </NavLink>
                  ) : (
                    <Link
                      className={classes.medical}
                      href=""
                      to="ID_HOME"
                      activeClass={classes.active}
                      spy={true}
                      smooth={true}
                      // offset={menu.scroll.offset}
                      duration={500}
                    >
                      Medical Lab
                    </Link>
                  )}
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={5} className={classes.paper}>
                <ul>
                  <li>
                    <NavLink className={classes.contactIcon} to='/'>
                      <FacebookIcon />
                      <span className={classes.facebook}>

                      Facebook
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={classes.contactIcon} to="/">
                      <TwitterIcon /> 
                      <span className={classes.twitter}>

                      Twitter
                      </span>
                    </NavLink>
                  </li>
                  {/* <li>
                    
                    Google +
                  </li> */}
                  <NavLink className={classes.contactIcon} to="/">
                    <li className={classes.zalo}>
                      <span className={classes.zaloIcon}>Z</span>
                      alo
                    </li>
                  </NavLink>
                </ul>
              </Grid>
            </Grid>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
}
export default withStyles(styles)(Bottom);
