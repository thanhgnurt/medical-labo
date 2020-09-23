import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import Bottom from "./Bottom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { useLocation } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

function Footer(props) {
  const { classes } = props;
  let location = useLocation();

  
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.footer}>
        <div className={classes.imgBacground}>
          <img
            className={classes.images}
            src="/images/bg-footer.jpg"
            alt="footer background"
          ></img>

          <div
            className={
              // location.pathname.startsWith("/dat-lich")
              location.pathname === "/"
                // ? classes.layoutPrimary
                ? classes.layoutSecondary
                : classes.layoutSecondary
            }
          >
            <Container maxWidth="lg">
              <div className={classes.content}>
                <Grid container>
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className={classes.paper}>Giới Thiệu</div>
                    <div className={classes.contentAbout}>
                      <ul className={classes.css_ul}>
                        <li>
                          <span>Điện thoại 1 : 123456789</span>
                        </li>
                        <li>
                          <span>Điện thoại 2 : 987654321</span>
                        </li>
                        <li>
                          <span>Email : thanhgnurt@gmail.com </span>
                        </li>
                      </ul>
                    </div>
                    <Divider className={classes.divider} />
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className={classes.footerContentRight}>
                      <div className={classes.paper}>Link Nhanh</div>
                      <div className={classes.contentAbout}>
                        <ul className={classes.css_ul}>
                          <li>
                            <span>Điện thoại 1 : 123456789</span>
                          </li>
                          <li>
                            <span>Điện thoại 2 : 987654321</span>
                          </li>
                          <li>
                            <span>Email : thanhgnurt@gmail.com </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Divider className={classes.divider} />
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
