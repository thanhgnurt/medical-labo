import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from 'react';
import TabResult from "./../TabResult";
import Result from '../Result';
import DoctorConsultation from './../DoctorConsultation';
import Feedback from "../Feedback";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0 10px",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },

}));
const showRequestResult=(props,newValue)=>{
  switch (newValue) {
    case 0:
      
      return <Result resultTest={props.resultTest}/>
    case 1:
      
      return  <DoctorConsultation/>
    case 2:
      
      return  <Feedback/>
  
    default:
      return <Result resultTest={props.resultTest}/>
  }
}

export default function PaperResultContainer(props) {
  const [showValue ,changeShowValue] = useState(0);
  const showValueResul=(newValue)=>{
    changeShowValue(newValue)
  }
  const classes = useStyles();
 
  return (
    
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TabResult handleChangeResult={showValueResul} />
          {showRequestResult(props, showValue)}
        </Paper>
      </div>
   
  );
}
