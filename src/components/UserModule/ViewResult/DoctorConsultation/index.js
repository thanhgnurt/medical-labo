import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop : theme.spacing(2),
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DortorConsultatin(props) {
  const classes = useStyles();
  const {idDefault, resultTest}= props;
  const findId = (id, resultTest) => {
    for (let i = 0; i < resultTest.length; i++) {
      if (resultTest[i].id === id) {
        return i;
      }
    }
  };
  let { id } = useParams();
  if (!id) {
    id = idDefault;
  }

  const showDoctorConsultation=(resultTest, id)=>{
    if (id && resultTest.length>0) {
      let index=findId(id, resultTest)
      switch (resultTest[index].chi_so_suc_khoe) {
        case 1:
      return <Alert severity="success">{resultTest[index].tu_van}</Alert>
        case 2:
          return  <Alert severity="info">{resultTest[index].tu_van}</Alert>
        case 3:
          return <Alert severity="warning">{resultTest[index].tu_van}</Alert>
        case 4:
         return <Alert severity="error">{resultTest[index].tu_van}</Alert>
        default:
          return <Alert severity="success">Chưa có tư vấn sức khỏe xin vui lòng giởi phản hồi vói chúng tôi để có thể hỗ trợ bạn sớm nhất</Alert>
      }
    } else return null
  }



  return (
    <div className={classes.root}>
      {/* <Alert severity="error">This is an error alert — check it out! This is an error alert — loren This is an error alert — check it out!This is an error alert — check it out!This is an error alert — check it out!This is an error alert — check it out! check it out! This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert> */}
      {showDoctorConsultation(resultTest, id)}
    </div>
  );
}
