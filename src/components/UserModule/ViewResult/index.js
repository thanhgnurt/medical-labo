// import DatePicker from "./DatePicker";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";
import { changeTabResultAdvisoryFeedback } from "./../../../redux/actions/userActions";
import PaperResultContainer from "./PaperResultContainer";
import MenusDoctor from "./ScreenDoctor/MenusDoctor";
import SideBar from "./SideBar";
import styles from "./styles";

function ViewResult(props) {
  const { classes, resultTest, changeTabResult } = props;
  let typeUser =JSON.parse(localStorage.getItem("USER")) ;
  if(typeUser){
    typeUser = typeUser.maLoaiNguoiDung
  }
  const showScreenPatients = ()=>{
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
    )
  }
  const showScreenDoctor = ()=>{
    return (
    <Grid container>
      {/* <ScreenDoctor resultTest={resultTest} changeTabResult={changeTabResult} /> */}
      <Grid
        item
        xs={12}
        sm={12}
        // md={10}
        // lg={10}
        // xl={10}
        className={classes.contentResult}
      >
        <MenusDoctor/>
      </Grid>

    </Grid>
    )
  }
  return (
    <div>
      {typeUser==="KhachHang"? showScreenPatients():showScreenDoctor()}
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
