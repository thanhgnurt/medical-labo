import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "absolute",
    zIndex: 10000,
    top: -2,
  },
});

export default function Progess(props) {
  const { showProgess } = props;
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 400);

    return () => {
      clearInterval(timer);
    };
  }, []);
  let xhtml = null;
  if (showProgess) {
    xhtml = (
      <div className={classes.root}>
        <LinearProgress
          variant="determinate"
          value={progress}
          color="secondary"
        />
      </div>
    );
  }

  return xhtml;
}
