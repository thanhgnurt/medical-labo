import { Grid, withStyles } from '@material-ui/core';
import React from 'react';
import SideBar from './SideBar';
import styles from './styles';

function ScreenDoctor(props) {
    const {classes,changeTabResult,resultTest, screenDoctor}= props;
    return (
        <Grid md={2} lg={2} xl={2} item className={classes.sidebar}>
        <SideBar resultTest={resultTest} changeTabResult={changeTabResult} screenDoctor={screenDoctor}/>
      </Grid>
    )
}
export default withStyles(styles)(ScreenDoctor)
