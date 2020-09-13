import { Button, withStyles } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import { NavLink } from "react-router-dom";

function Greeting(props) {
  const { classes } = props;
  return (
    <div className={classes.greeting}>
      <div className={classes.tittle}>
        Chào mừng bạn đến với dịch vụ theo dõi sức khỏe và xét nghiệm tại nhà.
      </div>
      <NavLink to="/dat-lich/carousel">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<AlarmOnIcon />}
        >
          Đặt hẹn ngay
        </Button>
      </NavLink>
    </div>
  );
}
export default withStyles(styles)(Greeting);
