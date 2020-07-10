import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { Container } from "@material-ui/core";
import './styles.css';
import styles from './styles';



function BasicPagination(props) {
  const {papers, classes} = props
  const changePager =(event, paper)=>{
    props.selectPaperTest(paper)
  }
  return (
    <Container maxWidth="md" >
      <div className={classes.root}>
        <Pagination count={papers} color="primary" className={classes.countPage} onChange={changePager}/>
      </div>
    </Container>
  );
}
export default withStyles(styles)(BasicPagination)