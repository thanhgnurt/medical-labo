import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import styles from "./styles";
import ScrollTop from "./ScrollTop";

Navbar.propTypes = {
  window: PropTypes.func,
  classes: PropTypes.object,
};

function Navbar(props) {
  const { window, classes } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <React.Fragment>
      <AppBar className={trigger ? classes.appBar : ""}>
        <Toolbar>
          <Typography variant="h6">Scroll to see button</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}></Box>
      </Container>
      <ScrollTop {...props} trigger={trigger} />
    </React.Fragment>
  );
}

export default withStyles(styles)(Navbar);
