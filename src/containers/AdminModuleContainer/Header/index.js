import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import React from "react";
import styles from "./styles";

function Header(props) {
  const { classes, open, handleDrawerOpen } = props;
  return (
    <Grid
      item
      xs={12}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.appBar}
    >
      <Grid item xs={2}>
        <IconButton
        className ={classes.buttonMenuToggle}
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          {open ? <MoreVertIcon /> : <FormatListBulletedIcon />}
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="baseline"
          
        >
          <IconButton color="secondary" aria-label="add an alarm" className={classes.menuPerson}>
            <PersonOutlineIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(Header);
