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
import { NavLink } from "react-router-dom";

function SignupPageContainer(props) {
  const { classes, signupOpen } = props;
  const handleClose = () => {
    const { actSignupToggle } = props.signupActionCreators;
    actSignupToggle();
  };

  return (
    <div className={classes.signup}>
      <Dialog
        open={signupOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <DialogTitle id="form-dialog-title" className={classes.tittle}>
        Đăng Ký
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="username"
            label="Họ Và Tên"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="username"
            label="Địa Chỉ"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="username"
            label="Số Điện Thoại"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Mật Khẩu"
            type="password"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Nhập Lại Mật Khẩu"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} size="small" variant="contained" color="primary">
            Hủy Bỏ
          </Button>
          <Button onClick={handleClose} size="small" variant="contained" type="submit" color="secondary">
            Đăng Ký
          </Button>
        </DialogActions>
        <DialogContent id="form-dialog-title" className={classes.signup}>
            Bạn đã có tài khoản ?
            <NavLink to="/login" >
              <Button color="secondary">Đăng Nhập</Button>
            </NavLink>
          </DialogContent>
      </Dialog>
    </div>
  );
}
const mapStateToProps = (state) => ({
  signupOpen: state.loginSignup.signupOpen,
});
const mapDispatchToProps = (dispatch) => ({
  signupActionCreators: bindActionCreators(singupActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(SignupPageContainer);
