import { withStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import styles from './styles';


function SideBar(props) {
  const {classes}= props
  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };
  return (
    <div className={classes.root}>
      <Divider />
    {/* <List component="nav" aria-label="main mailbox folders">
      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
    <List component="nav" aria-label="secondary mailbox folder">
      <ListItem
        button
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
      >
        <ListItemText primary="Trash" />
      </ListItem>
    
    </List> */}
    {/* <ListResult/> */}
    <Divider />
  </div>
  )
}

export default withStyles(styles)(SideBar);
