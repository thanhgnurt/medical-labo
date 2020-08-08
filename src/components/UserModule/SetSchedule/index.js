import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import { useParams, useRouteMatch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { compose } from "redux";
import styles from "./styles";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {},
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: 500,
    },
  },
  setSchedule: {
    position: "relative",
    "& img": {
      filter: "blur(15px)",
      height: 600,
      margin: "-11px 0 -5px -10px",
      width: "calc(100% + 5px)",
    },
  },
  content: {
    position: "absolute",
    zIndex: 5,
    top: 0,
    left: 0,
    right: 0,
    maxWidth: 700,
    margin: "auto",
  },
  background: {
    background: theme.palette.primary.backgroudSetSchedule,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  tittle: {
    marginBottom: "10px",
  },
  paper: {
    padding: "20px ",
    textAlign: "center",
  },
  buttonLogin: {
    marginTop: 20,
    textAlign: "center",
  },
  b_login: {
    marginRight: 10,
  },
  note: {
    marginTop: 20,
  },
  textField: {
    marginTop: 20,
  },
  messageValidate: {
    textAlign: "left",
    color: "red",
    marginTop: 5,
    paddingLeft: 5,
  },
}));

function SetSchedule(props) {
  // let { id } = useParams();
  // let { url } = useRouteMatch();

  const [name, setName] = React.useState("");
  const [phoneNumber, setNumberPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [message, setMessage] = React.useState("");
  const classes = useStyles();
  const handelOnChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "phoneNumber":
        let number = event.target.value;
        let numberLength = number.trim().length;
        setNumberPhone(number);
        if (message || numberLength === 10) {
          console.log(message);
          if (numberLength === 0) {
            const messageValidate = "Số điện thoại không được để trống.";
            setMessage(messageValidate);
          } else {
            if (number && isNaN(Number(number))) {
              const messageValidate = "Bạn phải nhập vào số";
              setMessage(messageValidate);
            } else {
              if (numberLength < 10) {
                const messageValidate = `Bạn mới chỉ nhập ${numberLength} số. Xin vui lòng nhập lại.`;
                setMessage(messageValidate);
              }
              if (numberLength > 10) {
                const messageValidate = `Bạn nhập đến ${numberLength} số. Xin vui lòng nhập lại.`;
                setMessage(messageValidate);
              }
              if (numberLength === 10) {
                setMessage(true);
              }
            }
          }
        }
        break;
      case "address":
        setAddress(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleOnBlur = (event) => {
    if (!phoneNumber) {
      const messageValidate = "Số điện thoại không được để trống.";
      setMessage(messageValidate);
    } else {
      if (phoneNumber && isNaN(Number(phoneNumber))) {
        const messageValidate = "Bạn phải nhập vào số";
        setMessage(messageValidate);
      } else {
        let numberLength = phoneNumber.trim().length;
        if (numberLength < 10) {
          const messageValidate = `Bạn mới chỉ nhập ${numberLength} số. Xin vui lòng nhập lại.`;
          setMessage(messageValidate);
        }
        if (numberLength > 10) {
          const messageValidate = `Bạn nhập đến ${numberLength} số. Xin vui lòng nhập lại.`;
          setMessage(messageValidate);
        }
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, phoneNumber, address);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.container}>
        <div className={classes.setSchedule}>
          <img
            src="/images/imgCarousel-6.jpg"
            alt="backgroud set schedule"
          ></img>
          <div className={classes.content}>
            <form
              className={classes.root}
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
            >
              <Paper className={classes.paper}>
                <Typography variant="h6" mb="2" className={classes.tittle}>
                  Đặt Lịch Xét Nghiệm
                </Typography>
                <TextField
                  fullWidth
                  label="Họ và tên"
                  name="name"
                  variant="outlined"
                  type="text"
                  onChange={handelOnChange}
                  className={classes.textField}
                />

                <TextField
                  fullWidth
                  label="Số điện thoại"
                  name="phoneNumber"
                  variant="outlined"
                  type="text"
                  id="phoneNumber"
                  onChange={handelOnChange}
                  onBlur={handleOnBlur}
                  className={classes.textField}
                />
                {message === true ? null : (
                  <div className={classes.messageValidate}>{message}</div>
                )}

                <TextField
                  fullWidth
                  label="Địa chỉ"
                  name="address"
                  variant="outlined"
                  type="text"
                  onChange={handelOnChange}
                  className={classes.textField}
                />

                <div className={classes.buttonLogin}>
                  <Button
                    variant="contained"
                    className={classes.b_login}
                    color="primary"
                    size="small"
                    type="submit"
                    disabled={message !== true ? true : false}
                  >
                    Đặt lịch
                  </Button>
                  <Button variant="contained" color="secondary" size="small">
                    Hủy bỏ
                  </Button>
                </div>
                <div className={classes.note}>
                  <h6>
                    Xin vui lòng điền chính xác thông tin, chúng tôi sẽ liên lạc
                    với bạn ngay.
                  </h6>

                  <h6>Xin chân thành cảm ơn !</h6>
                </div>
              </Paper>
            </form>
          </div>
          <div className={classes.background}></div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(SetSchedule);
