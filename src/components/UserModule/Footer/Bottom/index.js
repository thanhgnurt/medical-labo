import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function Bottom(props) {
  const { classes } = props;
  return (
    <div className={classes.background}>
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className={classes.bottom}>
          <Grid container spacing={1} className={classes.content}>
            <Grid item xs={12} sm={12} md={7}>
              <div className={classes.text}>
                © 2020 Be Clinic. All rights reserved | Design by Legnurt
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={5} className={classes.paper}>
              <ul>
                <li>
                  <i className="fab fa-facebook-f mr-2" />
                  Facebook
                </li>
                <li>
                  <i className="fab fa-twitter mr-2" />
                  Twitter
                </li>
                <li>
                  <i className="fab fa-google-plus-g mr-2" />
                  Google +
                </li>
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
