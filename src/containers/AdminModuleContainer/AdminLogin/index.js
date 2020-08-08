import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { Typography, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { connect } from "react-redux";
import { adminLoginRequest } from "./../../../redux/actions/adminActions";
import { useHistory, useLocation } from "react-router-dom";

function AdminLogin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  let location = useLocation();
  const { classes } = props;
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
    props.adminLoginRequest({
      user: {
        taiKhoan: username,
        matKhau: password,
      },
      history: history,
      navigation: location.prepage,
    });
  };

  const handleOnCancel=()=>{
    history.replace("/")
  }

  return (
    <div className={classes.bg}>
      <img src="/images/imgCarousel-6.jpg" alt="backgroud set schedule"></img>
      <div className={classes.content}>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h6" mb="2" className={classes.tittle}>
              Login Admin
            </Typography>

            <TextField
              fullWidth
              label="Username"
              name="username"
              variant="outlined"
              type="text"
              onChange={handelOnChange}
            />
            <br />
            <br />
            <TextField
              fullWidth
              label="Password"
              name="password"
              variant="outlined"
              type="password"
              onChange={handelOnChange}
            />
            <div className={classes.buttonLogin}>
              <Button
                variant="contained"
                className={classes.b_login}
                color="primary"
                size="small"
                type="submit"
              >
                Login
              </Button>
              <Button variant="contained" color="secondary" size="small" onClick={handleOnCancel}>
                Cancel
              </Button>
            </div>
          </Paper>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  adminLoginRequest: (dataLogin) => {
    dispatch(adminLoginRequest(dataLogin));
  },
});
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(AdminLogin)
);
