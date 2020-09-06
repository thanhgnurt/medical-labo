import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { NavLink } from "react-router-dom";

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
    <div>
      <ul className={classes.listMenu}>{showListResult(resultTest)}</ul>
    </div>
  );
}
export default withStyles(styles)(SideBar);
