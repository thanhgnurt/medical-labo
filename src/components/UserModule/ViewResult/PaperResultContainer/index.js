import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Feedback from "../Feedback";
import { changeTabResultAdvisoryFeedback } from "./../../../../redux/actions/userActions";
import DoctorConsultation from "./../DoctorConsultation";
import TabResult from "./../TabResult";
import TableResult from './../TableResult';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0 2px",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
}));
const showRequestResult = (resultTest, newValue, id) => {
  switch (newValue) {
    case 0:
      return <TableResult resultTest={resultTest} id={id} />;
    case 1:
      return (
        <DoctorConsultation resultTest={resultTest} idDefault={id} />
      );
    case 2:
      return <Feedback id={id} />;

    default:
      return <TableResult resultTest={resultTest} id={id} />;
  }
};

function PaperResultContainer(props) {
  const { showValueTabResult, changeTabResult } = props;
  const classes = useStyles();
  const { resultTest, id } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TabResult
          handleChangeResult={changeTabResult}
          showValueTabResult={showValueTabResult}
        />
        <Switch>
          <Route path="/ket-qua/:id">
            {showRequestResult(resultTest, showValueTabResult)}
          </Route>
          <Route path="/ket-qua">
            {showRequestResult(resultTest, showValueTabResult, id)}
          </Route>
        </Switch>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  showValueTabResult: state.tabResult,
});
const mapDispatchToProps = (dispatch) => ({
  changeTabResult: (value) => {
    dispatch(changeTabResultAdvisoryFeedback(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaperResultContainer);
