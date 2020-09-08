import { Paper, Typography, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { compose } from "redux";
import { userLogin } from "./../../redux/actions/userActions";
import styles from "./styles";
function LoginPageContainer(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  let location = useLocation();
  const { classes } = props;
  const { loginFaild } = props.userStatusLogin;
  

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
  if (localStorage.getItem("USER")&&location.prepage!=="/ket-qua") {
    return <div history={history.push("/")} />;
  }
  return (
    <div className={classes.bg}>
      <img src="/images/imgCarousel-6.jpg" alt="backgroud set schedule"></img>
      <div className={classes.content}>
        <form
          className={classes.root}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h6" className={classes.tittle}>
              Đăng nhập
            </Typography>

            {location.prepage === "/ket-qua" ? (
              <div id="form-dialog-title" className={classes.note1}>
                Vui lòng đăng nhập để xem kết quả !
              </div>
            ) : null}
            {loginFaild ? (
              <div id="form-dialog-title" className={classes.note2}>
                Tên đăng nhập hoặc mật khẩu không đúng, vui lòng kiểm tra.
              </div>
            ) : null}

            <TextField
              fullWidth
              label="Tên đăng nhập"
              name="username"
              variant="outlined"
              type="text"
              onChange={handelOnChange}
            />
            <br />
            <br />
            <TextField
              fullWidth
              label="Mật khẩu"
              name="password"
              variant="outlined"
              type="password"
              onChange={handelOnChange}
            />
            <div className={classes.buttonLogin}>
              <Button
                className={classes.b_login}
                onClick={handleClose}
                variant="contained"
                color="secondary"
                size="small"
              >
                Hủy bỏ
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
              >
                Đăng nhập
              </Button>
            </div>
            <div id="form-dialog-title" className={classes.signup}>
              Bạn chưa có tài khoản ? Vui lòng
              <Button color="primary" onClick={handleSignupOpen}>
                Đăng Ký
              </Button>
            </div>
          </Paper>
        </form>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  userStatusLogin : state.userReducer
});
const mapDispatchToProps = (dispatch) => ({
  userLogin: (user) => {
    dispatch(userLogin(user));
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(LoginPageContainer);
