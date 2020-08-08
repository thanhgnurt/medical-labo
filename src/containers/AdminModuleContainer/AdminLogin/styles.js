const styles = (theme) => ({
  bg: {
    
    
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    "& img": {
      filter: "blur(15px)",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      position :"absolute",
      margin: "-11px 0 -5px -10px",
      width: "calc(100% + 5px)",
      objectFit: "cover",
    },
  },
  root: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 50,

    // marginTop:"10%",
    "& > *": {
      margin: theme.spacing(1),
      width: 400,

      textAlign: "center",
    },
  },
  paper: {
    padding: "20px 10px ",
  },
  tittle: {
    marginBottom: "10px",
  },
  buttonLogin: {
    marginTop: 10,
    textAlign: "right",
  },
  b_login: {
    marginRight: 10,
  },
  content: {
    position: "absolute",
    zIndex: 5,
    top: 0,
    left: 0,
    right: 0,
    bottom:0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",

    margin: "auto",
  },
});
export default styles;
