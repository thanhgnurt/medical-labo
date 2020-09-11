import React from 'react'
import { withStyles } from '@material-ui/core';
import styles from './styles';
import TableResult from './../TableResult'


function ResultTest(props) {
  return (
    <div>
      <TableResult resultTest={props.resultTest} id={props.id}/>
    </div>
  )
}

export default withStyles(styles)(ResultTest)
