import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import styles from "./styles";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";

function CustomizedSwitches(props) {
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const { classes } = props;

  const handleChange = (event) => {
    // console.log(event.target.checked);
    props.changeTheme()

    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const IOSSwitch = withStyles((theme) => ({
    root: {
      "&:hover": {
        border : "1px solid white",
      },
      width: 41,
      height: 25,
      padding: 0,
      margin: theme.spacing(1),
      borderRadius: 100,
      borderBottom: "1px solid white",
      boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    },
   
    switchBase: {
      color:"white",
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: theme.palette.primary.main,
          opacity: 1,
          border: "none",
          
        },
            // "&:hover": {
            //   "& + $track": {
            //     backgroundColor: theme.palette.primary.hoverColor,
            //     opacity: 1,
            //     border: "none",
                
            //   },
              
            // },
       
      },
      "&$focusVisible $thumb": {
        color: theme.palette.primary.main,
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.primary.main,
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
      borderBottom: "1px solid white",
      boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  return (
    <FormGroup className={classes.switch}>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            size="small"
          />
        }
        label={
          state.checkedB ? (
           
            <Brightness4OutlinedIcon />
          ) : (
            <WbIncandescentOutlinedIcon />
          )
        }
      />
    </FormGroup>
  );
}

export default withStyles(styles)(CustomizedSwitches);
