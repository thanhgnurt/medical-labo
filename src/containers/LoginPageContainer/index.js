import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { compose } from "redux";
import styles from "./styles";
import { withStyles, Grid } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { userLogin } from "./../../redux/actions/userActions";
function LoginPageContainer(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  let location = useLocation();
  const { classes } = props;

  const handleClose = () => {
    if (history) {
      history.push("/");
    }
  };

  const handleSignupOpen = () => {
    if (history) {
      history.push("/signup");
    }
  };
  const handelOnChange = (event) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.userLogin({
      user: {
        taiKhoan: username,
        matKhau: password,
      },
      history: history,
      navigation: location.prepage,
    });
  };
  if (localStorage.getItem("USER")) {
    return <div history={history.goBack()} />;
  }
  return (
    <Grid container className={classes.login}>
      <Dialog
        open={true}
        // onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <form className={classes.form} onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title" className={classes.tittle}>
            Đăng Nhập
          </DialogTitle>
          {location.prepage==="/ket-qua" ? (
            <div id="form-dialog-title" className={classes.note}>
              Vui lòng đăng nhập để xem kết quả !
            </div>
          ) : null}

          <DialogContent>
            <TextField
              margin="normal"
              id="username"
              name="username"
              label="Tên Đăng Nhập / SĐT"
              type="text"
              fullWidth
              onChange={handelOnChange}
            />
            <TextField
              margin="normal"
              name="password"
              id="password"
              label="Mật Khẩu"
              type="password"
              fullWidth
              onChange={handelOnChange}
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
const mapStateToProps = (state) => ({
  userLoginStatus: state.userReducer.userLogin,
});
const mapDispatchToProps = (dispatch) => ({
  userLogin: (user) => {
    dispatch(userLogin(user));
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(LoginPageContainer);
