import { Button, withStyles } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import { NavLink } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";

function Greeting(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.greeting}>
        <div className={classes.tittle}>
          Chào mừng bạn đến với dịch vụ theo dõi sức khỏe và xét nghiệm tại nhà.
        </div>
        <div className={classes.containerText}>
          <div className={classes.contentText}>
            Bạn rất bận rộn không có thời gian cũng như khá ngại khi phải chờ
            đợi và nhiều thủ tục phiền phức khi đi khám bệnh.
          </div>
          <div className={classes.contentText}>
            Không sao ! Hãy liên lạc ngay với chúng tôi để trải nghiệm dịch vụ
          </div>
          <div className={classes.contentText}>
            Lấy máu xét nghiệm tại nhà, hỗ trợ tư vấn quản lý và xem kết quả
            trực tiếp qua website.
          </div>
        </div>

        <div className={classes.divButton}>
          <NavLink to="/dat-lich/carousel">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AlarmOnIcon />}
            >
              Đặt hẹn ngay
            </Button>
          </NavLink>
          <a href="tel:0123456789">
             <Button
            variant="outlined"
            // color="black"
            className={classes.button}
            startIcon={<PhoneIcon />}
          >
            Liên hệ : 0123456789
          </Button>
          </a>
         
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(Greeting);
