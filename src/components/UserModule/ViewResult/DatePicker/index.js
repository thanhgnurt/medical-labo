import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import styles from './styles';
// import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { withStyles } from '@material-ui/core';

function DatePicker(props) {
  const {classes}= props
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
      <div className={classes.datePicker}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">

        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Ngày xét nghiệm"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    
      </Grid>
    </MuiPickersUtilsProvider>
      </div>

  
  );
}
export default withStyles(styles)(DatePicker)