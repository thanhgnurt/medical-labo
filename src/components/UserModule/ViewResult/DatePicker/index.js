import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import styles from "./styles";
// import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { withStyles } from "@material-ui/core";

function DatePicker(props) {
  const { classes } = props;
  // The first commit of Material-UI
  const [selectedDateTo, setSelectedDateTo] = React.useState(new Date());
  const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date());

  const handleDateChangeTo = (date) => {
    setSelectedDateTo(date);
  };
  const handleDateChangeFrom = (date) => {
    setSelectedDateFrom(date);
  };

  return (
    <Grid className={classes.datePicker} container>
      <Grid item xs={6} sm={4} md={8} xm={12}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="flex-start">
            <KeyboardDatePicker
              margin="normal"
              id="date-start"
              label="Từ ngày"
              format="MM/dd/yyyy"
              value={selectedDateTo}
              onChange={handleDateChangeTo}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid xs={6} sm={4} md={8} item>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="flex-start">
            <KeyboardDatePicker
              margin="normal"
              id="date-end"
              label="Đến ngày"
              format="MM/dd/yyyy"
              value={selectedDateFrom}
              onChange={handleDateChangeFrom}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        
      </Grid>
  
    </Grid>
  );
}
export default withStyles(styles)(DatePicker);
