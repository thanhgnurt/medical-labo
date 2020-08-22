import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
      textAlign:"center",
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '500px',
      
    },
    
  },
  button: {
    margin: theme.spacing(1),
    marginBottom:20
  },
}));
// const handleSubmit=(event)=>{
//     event.preventDefault();
//     console.log("gui phan hoi");
//     console.log(event);
// }
const onSendFeedback=(value)=>{
    console.log(value);
}
export default function Feedback() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const resetForm=()=>{
      setValue("");
  }


  return (
    <form className={classes.root} noValidate autoComplete="off">
 
    <div>
        <TextField
          id="filled-multiline-static"
          label="Phản hồi & góp ý"
          multiline
          rows={6}
          value={value}
          variant="outlined"
          onChange={handleChange}
        />
       
    </div>
    <div>
      <Button
       onClick= {resetForm}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Xóa
      </Button>
     
      <Button
        onClick={()=>onSendFeedback(value)}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Gửi
      </Button>

    </div>
    
    </form>
  );
}
