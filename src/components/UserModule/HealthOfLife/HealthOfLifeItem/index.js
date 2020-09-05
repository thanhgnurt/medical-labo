// import { useParams, useRouteMatch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import styles from "./styles";
import RenalFunction from "./../../ListGroupTest/DetailTest/RenalFunction";

const useStyles = makeStyles((theme) => ({
  setSchedule: {
    position: "relative",
  },
  image: {
    position: "absolute",
    "& img": {
      filter: "blur(15px)",
      margin: "-11px 0 -5px -10px",
      width: "calc(100% + 5px)",
    },
  },

  content: {
    position: "relative",
    zIndex: 5,
    top: 0,
    left: 0,
    right: 0,
    maxWidth: "960px",
    margin: "auto",
  },

  background: {
    background: theme.palette.primary.backgroudSetSchedule,
    // background: "linear-gradient(to top,#fff,transparent 100%)",
    // background: "linear-gradient(to top,#0a2029,transparent 100%)",
  
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  paper: {
    padding: "20px ",
    textAlign: "center",
  },
  container:{
    background: theme.palette.primary.backgroudSetSchedule,
    
  }
}));

function HealthOfLifeItem(props) {
  const { groupTest } = props;

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.container}>
        <div className={classes.setSchedule}>
          <div className={classes.image}>
            <img src={groupTest.image} alt="backgroud set schedule"></img>
          </div>
          <div className={classes.background}></div>
          <div className={classes.content}>
            <Paper className={classes.paper}>
              <RenalFunction groupTest={groupTest}/>
           
            </Paper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(HealthOfLifeItem);
