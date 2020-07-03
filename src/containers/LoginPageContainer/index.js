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
import * as loginSignupActions from "./../../redux/actions/loginSignup";
import { NavLink } from "react-router-dom";

function LoginPageContainer(props) {
  const { classes, loginOpen } = props;
  const handleClose = () => {
    const { actLoginToggle } = props.loginSignCreators;
    actLoginToggle();
  };

  const handleSignupOpen = () => {
    const { actSignupToggle } = props.loginSignCreators;
    actSignupToggle();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.login}>
      <Dialog
        open={loginOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <form className={classes.form} onClick={handleSubmit}>
          <DialogTitle id="form-dialog-title" className={classes.tittle}>
            Đăng Nhập
          </DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="username"
              label="Tên Đăng Nhập / SĐT"
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
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Button size="small" variant="contained" onClick={handleClose} color="primary">
              Hủy Bỏ
            </Button>
            <Button size="small" variant="contained" type="submit" color="secondary">
              Đăng Nhập
            </Button>
          </DialogActions>

          <DialogContent id="form-dialog-title" className={classes.signup}>
            Bạn chưa có tài khoản ?
            <NavLink to="/signup" onClick={handleSignupOpen}>
              <Button color="secondary">Đăng Ký</Button>
            </NavLink>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
const mapStateToProps = (state) => ({
  loginOpen: state.loginSignup.loginOpen,
});
const mapDispatchToProps = (dispatch) => ({
  loginSignCreators: bindActionCreators(loginSignupActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(LoginPageContainer);
