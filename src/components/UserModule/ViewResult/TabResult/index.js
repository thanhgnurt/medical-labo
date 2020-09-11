import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Toolbar } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    zIndex:"10",

  },
  tab:{
    fontSize :11,
    
  },
  tabs:{
  
    
  },
  appbar:{
  }
}));

export default function ScrollableTabsButtonAuto(props) {
  const {showValueTabResult, handleChangeResult}= props
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    
    handleChangeResult(newValue)
  };

  return (
    <Toolbar className={classes.root}>
      <AppBar position="static" color="default" className={classes.appbar}>
        <Tabs
          value={showValueTabResult}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="Kết quả" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Tư vấn" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Góp ý" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
  
  
    </Toolbar>
  );
}
