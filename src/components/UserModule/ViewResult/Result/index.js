import React from 'react'
import { withStyles } from '@material-ui/core';
import styles from './styles';
import TableResult from './../TableResult'


function ResultTest(props) {
  return (
    <div>
      <TableResult resultTest={props.resultTest}/>
    </div>
  )
}

export default withStyles(styles)(ResultTest)
