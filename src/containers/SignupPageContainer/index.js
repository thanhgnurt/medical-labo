import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import * as singupActions from "./../../redux/actions/loginSignup";
import { useHistory } from "react-router-dom";

function SignupPageContainer(props) {
  let history= useHistory()
  const { classes } = props;
  const handleClose = () => {
    // const { actSignupToggle } = props.signupActionCreators;
    // actSignupToggle();
    if (history) {
      history.push("/");
    }

  };
  const handelOpenLogin = () => {
    // const { actSignupToggle, actLoginToggle } = props.signupActionCreators;
    // actSignupToggle();
    // actLoginToggle();
    if (history) {
      history.push("/login");
    }
  };

  return (
    <div className={classes.signup}>
      <Dialog
        open={true}
        // onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
        // maxWidth="lg"
        // fullScreen="true"
      >
        <DialogTitle id="form-dialog-title" className={classes.tittle}>
          Đăng Ký
        </DialogTitle>
        <DialogContent >
          <TextField
            margin="normal"
            id="lastnameAndName"
            label="Họ Và Tên"
            type="text"
            fullWidth
          />
          {/* <TextField
            margin="normal"
            id="adress"
            label="Địa Chỉ"
            type="text"
            fullWidth
          /> */}
          <TextField
            margin="normal"
            id="phoneNumber"
            label="Số Điện Thoại"
            type="text"
            fullWidth
          />
          <TextField
            margin="normal"
            id="username"
            label="Username"
            type="text"
            fullWidth
          />
          <TextField
            margin="normal"
            id="password"
            label="Mật Khẩu"
            type="password"
            fullWidth
          />
          <TextField
            margin="normal"
            id="repassword"
            label="Nhập Lại Mật Khẩu"
            type="password"
            fullWidth
            className={classes.textField}
          />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            onClick={handleClose}
            size="small"
            variant="contained"
            color="secondary"
          >
            Hủy Bỏ
          </Button>
          <Button
            onClick={handleClose}
            size="small"
            variant="contained"
            type="submit"
            color="primary"
          >
            Đăng Ký
          </Button>
        </DialogActions>
        <div id="form-dialog-title" className={classes.askLogin}>
          Bạn đã có tài khoản ?
          <Button color="primary" onClick={handelOpenLogin}>
            Đăng Nhập
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
// const mapStateToProps = (state) => ({
//   signupOpen: state.loginSignup.signupOpen,
// });
const mapDispatchToProps = (dispatch) => ({
  signupActionCreators: bindActionCreators(singupActions, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(SignupPageContainer);
