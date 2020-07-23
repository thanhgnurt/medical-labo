import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import { useParams, useRouteMatch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  container: {
    
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: 500,
    },
  },
  setSchedule: {
    position: "relative",
    "& img": {
      filter: "blur(15px)",
      height: 600,
      margin: "-11px 0 -5px -10px",
    width: "calc(100% + 5px)"
    },
  },
  content: {
    position: "absolute",
    zIndex: 5,
    top: 0,
    left: 0,
    right: 0,
    maxWidth: 700,
    margin: "auto",
  },
  background: {
    background: theme.palette.primary.backgroudSetSchedule,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
}
  
}));

export default function SetSchedule() {
  // let { id } = useParams();
  // let { url } = useRouteMatch();
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.container}>
        <div className={classes.setSchedule}>
          <img src="/images/imgCarousel-6.jpg" alt="backgroud set schedule"></img>
          <div className={classes.content}>
            <div className={classes.root}>
              <Paper />
            </div>
          </div>
          <div className={classes.background}></div>
        </div>
      </div>
    </React.Fragment>
  );
}
