import React from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

function ScrollTop(props) {
  const { trigger, classes } = props;
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab className={classes.backToTop} size="small" aria-label="scroll back to top">
          <ArrowUpwardOutlinedIcon />
        </Fab>
      </div>
    </Zoom>
  );
}

export default withStyles(styles)(ScrollTop);
