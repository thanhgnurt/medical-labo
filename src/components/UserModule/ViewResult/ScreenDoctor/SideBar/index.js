import { InputBase, withStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles";
import "./styles.css";
function SideBar(props) {
  const { classes, changeTabResult, screenDoctor } = props;
  const { listPatients } = screenDoctor;

  let location = useLocation();
  const [active, setActive] = useState(listPatients[0].id);
  const handleOnClick = (patients) => {
    if (patients.id) {
      setActive(patients.id);
    }
    changeTabResult();
  };
  // const showDate = (date) => {
  //   if (date.length === 8) {
  //     return date.slice(0, 2) + "/" + date.slice(2, 4) + "/" + date.slice(4, 8);
  //   }
  //   return date;
  // };
  const showListResult = (listPatients) => {
    if (listPatients.length > 0) {
      return listPatients.map((item, index) => {
        return (
          <ListItem
            onClick={() => handleOnClick(item)}
            button
            divider
            className={
              item.id === active ? classes.activeItem : classes.itemList
            }
            key={index}
          >
            <NavLink
              activeClassName={classes.active}
              className={
                index === 0 && location.pathname === "/ket-qua"
                  ? classes.activeFirst
                  : ""
              }
              to={`/ket-qua/${item.id}`}
            >
              {item.name} <span className={classes.year}>({item.year})</span>
            </NavLink>

            <Divider light />
          </ListItem>
        );
      });
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {/* <Grid justify="space-between" container className={classes.dropdown}> */}
        {/* <Grid item className="dropdown">
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
          </Grid> */}
        {/* <Grid item>
            <Button variant="contained" endIcon={<AcUnitIcon />} size="small">
              Button
            </Button>
          </Grid> */}
        {/* </Grid> */}
        <div className={classes.menuDesktop}>
          <div className={classes.tittle}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Tên bệnh nhân…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>

          <List
            component="nav"
            className={classes.listMenu}
            aria-label="mailbox folders"
          >
            {showListResult(listPatients)}
          </List>
        </div>
        
        <Divider />
        <Divider />
        <Divider />
      </Paper>

    </div>
  );
}
export default withStyles(styles)(SideBar);
