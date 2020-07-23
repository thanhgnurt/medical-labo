import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import Bottom from "./Bottom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {useLocation} from 'react-router-dom';

function Footer(props) {
  const { classes } = props;
  let location = useLocation();
  return (
    <React.Fragment>
      <CssBaseline />
        <div>
          <div className={classes.imgBacground}>
            <div className={location.pathname === "/" ? classes.layoutPrimary : classes.layoutSecondary}>
      <Container maxWidth="lg">
              <div className={classes.content}>
                <Grid container >
                  <Grid item md={7} sm={12}>
                    <div className={classes.paper}>
                      <span className="fa fa-user-md mr-3"></span>
                      Giới Thiệu
                    </div>
                    <div className={classes.contentAbout}>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <div className={classes.hr}></div>
                  </Grid>
                  <Grid item md={5} sm={12}>
                    <div className={classes.paper}>Link Nhanh</div>
                  </Grid>
                </Grid>
              </div>
      </Container>
            </div>
          </div>
          <Bottom />
        </div>
    </React.Fragment>
  );
}
export default withStyles(styles)(Footer);
