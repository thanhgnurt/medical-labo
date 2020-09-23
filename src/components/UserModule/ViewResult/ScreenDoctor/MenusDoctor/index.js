import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AddIcon from '@material-ui/icons/Add';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ListIcon from "@material-ui/icons/List";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: 12,
  },
  button:{
    textTransform: "none",
    marginRight : 10
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ListIcon />
          </IconButton> */}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<ListIcon />}
          >
            Danh mục
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<DoneAllIcon />}
          >
            Kết quả
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
          >
            Chỉ định
          </Button>
          {/* <Typography color="inherit">Photos</Typography>
          <Typography color="inherit">Photos</Typography>
          <Typography color="inherit">Photos</Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
