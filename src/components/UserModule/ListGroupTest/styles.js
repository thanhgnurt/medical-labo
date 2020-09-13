const styles = (theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  header_paper: {
    // backgroundColor: theme.palette.primary.backgroundPaper,
  },
  tittle: {
    fontSize: 22,
    color: theme.palette.primary.hoverColor,
    padding: 20,

    background: `linear-gradient(to bottom,rgb(0, 0, 0, 0.05),transparent 100%)`,
  },
  tittleText: {
    position: "relative",
    top: 2,
    padding: "30px 10px",
  },
});
export default styles;
