import { Button, withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import AcUnitIcon from "@material-ui/icons/AcUnit";

function SideBar(props) {
  const { classes, resultTest } = props;
  const showListResult = (resultTest) => {
    if (resultTest.length > 0) {
      return resultTest.map((item) => {
        return (
          <li className={classes.itemList} key={item.id}>
            <NavLink to={`/ket-qua/${item.id}`}>{item.ngay_xet_nghiem}</NavLink>
          </li>
        );
      });
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid justify="space-between" container className={classes.dropdown}>
          <Grid item className="dropdown">
            <Button
              variant="contained"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              size="small"
            >
              Danh sách
            </Button>

            <div className="dropdown-menu mobile_dropdown">
              <ul className={classes.listMenuDropdown}>
                {showListResult(resultTest)}
              </ul>
            </div>
          </Grid>
          <Grid item>
            <Button variant="contained" endIcon={<AcUnitIcon />} size="small">
              Button
            </Button>
          </Grid>
        </Grid>
        <div className={classes.menuDesktop}>
          <div className={classes.tittle}>Danh sách</div>
          <ul className={classes.listMenu}>{showListResult(resultTest)}</ul>
        </div>
      </Paper>
    </div>
  );
}
export default withStyles(styles)(SideBar);
