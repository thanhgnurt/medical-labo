import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
// import { useParams, useRouteMatch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { compose } from "redux";
import styles from "./styles";
import { connect } from "react-redux";
import PhoneIcon from "@material-ui/icons/Phone";
import { PHONE_ONE } from "./../../../../constantPages/numberPhones";
import Divider from "@material-ui/core/Divider";

function SetSchedule(props) {
  const { groupTest, classes } = props;
  let history = useHistory();

  const [name, setName] = React.useState("");
  const [phoneNumber, setNumberPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [message, setMessage] = React.useState("");

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
            const messageValidate = "Số điện thoại không được để trống *";
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
      const messageValidate = " Số điện thoại không được để trống.";
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

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.container}>
        <div className={classes.setSchedule}>
          <img src={groupTest.image} alt="backgroud set schedule"></img>
          {/* <div className={classes.div}></div> */}
          <div className={classes.content}>
            <form
              className={classes.root}
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
            >
              <Paper className={classes.paper}>
                <Typography variant="h6" mb="2" className={classes.tittle}>
                  Đặt Hẹn Xét Nghiệm
                </Typography>
                <div className={classes.note}>
                  <div>
                    <h6>
                      Chúng tôi sẽ liên lạc xác nhận thông tin với bạn ngay khi
                      thuận tiện và trong thời gian sớm nhất
                    </h6>
                  </div>

                  <div className={classes.contact}>
                    {/* <h6>Xin chân thành cảm ơn !</h6> */}
                    <h6>Bạn có thể liên hệ ngay với chúng tôi tại:</h6>
                  </div>
                  <a href={`tel:${PHONE_ONE}`}>
                    <div
                      variant="outlined"
                      size="large"
                      className={classes.buttonContact}
                      // color="secondary"
                    >
                      <PhoneIcon className={classes.phoneIcon}/>

                      {PHONE_ONE}
                    </div>
                  </a>
                </div>
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
                  required={true}
                />
                {message === true ? null : (
                  <div className={classes.messageValidate}>{message}</div>
                )}

                <TextField
                  fullWidth
                  label="Lời nhắn"
                  name="address"
                  variant="outlined"
                  type="text"
                  onChange={handelOnChange}
                  className={classes.textField}
                />
                <div className={classes.divider}>
                  <Divider />
                </div>

                <div className={classes.buttonLogin}>
                  <Button
                    variant="contained"
                    className={classes.b_login}
                    color="primary"
                    size="medium"
                    type="submit"
                    disabled={message !== true ? true : false}
                  >
                    Đặt hẹn
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    size="medium"
                    onClick={handleCancel}
                  >
                    Hủy bỏ
                  </Button>
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
