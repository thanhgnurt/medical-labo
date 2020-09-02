import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import React from "react";
import styles from "./styles";

function ButtonChangeTheme(props) {
  const [changeTheme, setChangeTheme] = React.useState(true);
  const { classes, trigger } = props;
  const handleChange = (event) => {
    props.changeTheme();

    setChangeTheme(!changeTheme);
  };

  return (
    <div>
      <IconButton
       
        className={!trigger ? classes.icon : classes.iconScroll}
        onClick={handleChange}
      >
        {changeTheme ? (
          <Brightness4OutlinedIcon />
        ) : (
          <WbIncandescentOutlinedIcon />
        )}
      </IconButton>
    </div>
  );
}

export default withStyles(styles)(ButtonChangeTheme);
