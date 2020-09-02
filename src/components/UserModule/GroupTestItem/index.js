import React from "react";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import styles from "./styles";
import { NavLink } from "react-router-dom";
import "./styles.css";
import DetailsIcon from "@material-ui/icons/Details";

function GroupTestItem(props) {
  const { setTest, classes } = props;
  return (
    <Paper className={classes.root} elevation={3}>
      <div>
        <img className={classes.media} src={setTest.image} alt="movie-2" />
      </div>
      <div className={classes.detail}>
        <NavLink to={`/chi-tiet-xet-nghiem/${setTest.nameTest}`}>
          <Button size="small" variant="contained" startIcon={<DetailsIcon />} color="primary">
            Chi tiết
          </Button>
        </NavLink>
      </div>
      <CardHeader
        className={classes.tittle}
        title={setTest.nameTest}
        subheader={setTest.include}
      />
      <CardContent>
        <Typography
          variant="body2"
          className={classes.description}
          component="p"
        >
          {setTest.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <NavLink to={`/dat-lich/${setTest.nameTest}`}>
          <Button
            variant="outlined"
            color="secondary"
            aria-label="add to favorites"
            className={classes.button}
            startIcon={<AlarmOnIcon />}
            size="small"
          >
            Đặt Lịch Lấy Mẫu
          </Button>
        </NavLink>
      </CardActions>
    </Paper>
  );
}
export default withStyles(styles)(GroupTestItem);
