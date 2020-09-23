import { Button, withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { useLocation } from "react-router-dom";

function SideBar(props) {
  const { classes, resultTest, changeTabResult } = props;
  let location = useLocation();
  const [date, setDate] = useState(0);
  const handleOnClick = (date) => {
    if (date) {
      date = showDate(date);
      setDate(`Ngày ${date}`);
    }
    changeTabResult();
  };
  const showDate = (date) => {
    if (date.length === 8) {
      return date.slice(0, 2) + "/" + date.slice(2, 4) + "/" + date.slice(4, 8);
    }
    return date;
  };
  const showListResult = (resultTest) => {
    if (resultTest.length > 0) {
      return resultTest.map((item, index) => {
        return (
          <li className={classes.itemList} key={item.id}>
            <NavLink
              activeClassName={classes.active}
              className={
                index === 0 && location.pathname === "/ket-qua"
                  ? classes.activeFirst
                  : ""
              }
              to={`/ket-qua/${item.id}`}
              onClick={() => handleOnClick(item.ngay_xet_nghiem)}
            >
              Ngày {showDate(item.ngay_xet_nghiem)}
            </NavLink>
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
              {date === 0 ? "Danh sách kết quả" : date}
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
          <div className={classes.tittle}>Danh sách bệnh nhân</div>
          <ul className={classes.listMenu}>{showListResult(resultTest)}</ul>
        </div>
      </Paper>
    </div>
  );
}
export default withStyles(styles)(SideBar);
