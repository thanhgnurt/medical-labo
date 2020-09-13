import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import renderTextField from "./../../components/FormHelper/TextField";
import styles from "./styles";
import validate from "./validate";

function SignupPageContainer(props) {
  let history = useHistory();
  const { classes, submitting, handleSubmit, invalid } = props;
  const handelSubmitForm = (data) => {
    console.log(data);
  };
  const handleClose = () => {
    if (history) {
      history.push("/");
    }
  };
  const handelOpenLogin = () => {
    if (history) {
      history.push("/login");
    }
  };
  if (localStorage.getItem("USER")) {
    return <div history={history.goBack()} />;
  }

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
        <form  onSubmit={handleSubmit(handelSubmitForm)} autocomplete="off">
        <DialogContent>
          <Field
            id="lastnameAndName"
            label="Họ Và Tên"
            type="text"
            className={classes.textField}
            margin="normal"
            name="lastnameAndName"
            fullWidth
            component={renderTextField}
          />
          <Field
            id="phoneNumber"
            label="Số Điện Thoại"
            type="text"
            className={classes.textField}
            margin="normal"
            name="phoneNumber"
            fullWidth
            component={renderTextField}
          />
          <Field
            id="username"
            label="Username"
            type="text"
            className={classes.textField}
            margin="normal"
            name="username"
            fullWidth
            component={renderTextField}
          />
          <Field
            id="password"
            label="Mật Khẩu"
            type="text"
            className={classes.textField}
            margin="normal"
            name="password"
            fullWidth
            component={renderTextField}
          />
          <Field
            id="repassword"
            label="Nhập Lại Mật Khẩu"
            type="text"
            className={classes.textField}
            margin="normal"
            name="repassword"
            fullWidth
            component={renderTextField}
          />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            onClick={handleClose}
            size="small"
            variant="contained"
            color="inherit"
          >
            Hủy Bỏ
          </Button>
          <Button
            size="small"
            variant="contained"
            type="submit"
            color="primary"
            disabled={invalid || submitting}
          >
            Đăng Ký
          </Button>
        </DialogActions>
        </form>
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

const FORM_NAME = "TASK_MANAGEMANT";
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(SignupPageContainer);
