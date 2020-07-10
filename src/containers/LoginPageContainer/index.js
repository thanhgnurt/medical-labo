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
import { withStyles, Grid } from "@material-ui/core";
import * as loginSignupActions from "./../../redux/actions/loginSignup";
import { useHistory } from "react-router-dom";

function LoginPageContainer(props) {
  let history = useHistory();
  const { classes } = props;

  const handleClose = () => {
    // const { actLoginToggle } = props.loginSignCreators;
    // actLoginToggle();
    if (history) {
      history.push("/");
    }
  };

  const handleSignupOpen = () => {
    // const { actSignupToggle } = props.loginSignCreators;
    // actSignupToggle();
    if (history) {
      history.push("/signup");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container className={classes.login}>
      <Dialog
        open={true}
        // onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <form className={classes.form} onClick={handleSubmit}>
          <DialogTitle id="form-dialog-title" className={classes.tittle}>
            Đăng Nhập
          </DialogTitle>
          <DialogContent>
            <TextField
              margin="normal"
              id="username"
              label="Tên Đăng Nhập / SĐT"
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
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Button
              size="small"
              variant="contained"
              onClick={handleClose}
              color="secondary"
            >
              Hủy Bỏ
            </Button>
            <Button
              size="small"
              variant="contained"
              type="submit"
              color="primary"
            >
              Đăng Nhập
            </Button>
          </DialogActions>

          <DialogContent id="form-dialog-title" className={classes.signup}>
            Bạn chưa có tài khoản ?
            <Button color="primary" onClick={handleSignupOpen}>
              Đăng Ký
            </Button>
          </DialogContent>
        </form>
      </Dialog>
    </Grid>
  );
}
// const mapStateToProps = (state) => ({
//   loginOpen: state.loginSignup.loginOpen,
// });
const mapDispatchToProps = (dispatch) => ({
  loginSignCreators: bindActionCreators(loginSignupActions, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(LoginPageContainer);
