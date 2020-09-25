// import DatePicker from "./DatePicker";
import { Paper, withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";
import { changeTabResultAdvisoryFeedback } from "./../../../redux/actions/userActions";
import PaperResultContainer from "./PaperResultContainer";
import SideBarScreenDoctor from "./ScreenDoctor/SideBar";
import SideBar from "./SideBar";
import styles from "./styles";
import TableResult from "./TableResult";
function ViewResult(props) {
  const { classes, resultTest, changeTabResult, screenDoctor } = props;
  let typeUser = JSON.parse(localStorage.getItem("USER"));
  if (typeUser) {
    typeUser = typeUser.maLoaiNguoiDung;
  }
  let id = "";
  if (resultTest.length > 0) {
    id = resultTest[0].id;
  }
  const showScreenPatients = () => {
    return (
      <Grid container>
        <Grid md={2} lg={2} xl={2} item className={classes.sidebar}>
          <SideBar resultTest={resultTest} changeTabResult={changeTabResult} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={10}
          xl={10}
          className={classes.contentResult}
        >
          <PaperResultContainer resultTest={resultTest} />
        </Grid>
      </Grid>
    );
  };
  const showScreenDoctor = () => {
    return (
      <Grid container>
        <Grid md={3} lg={2} xl={2} sm={3} xs={3} item className={classes.sidebar}>
          <SideBarScreenDoctor
            resultTest={resultTest}
            changeTabResult={changeTabResult}
            screenDoctor= {screenDoctor}
          />
        </Grid>
        <Grid
          item
          xs={9}
          sm={9}
          md={9}
          lg={10}
          xl={10}
          className={classes.contentResult}
        >
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <TableResult resultTest={resultTest} id={id} />
            </Paper>
          </div>
        </Grid>
      </Grid>
    );
  };
  return (
    <div>
      {typeUser === "KhachHang" ? showScreenPatients() : showScreenDoctor()}
    </div>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  changeTabResult: () => {
    dispatch(changeTabResultAdvisoryFeedback(0));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ViewResult));
