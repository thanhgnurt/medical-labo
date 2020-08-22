import React from "react";
import { useParams } from "react-router-dom";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

export default function HealthOfLifeItem(props) {
  let {id} = useParams()
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >{id}</Typography>
    </Container>
  </React.Fragment>
  );
}
