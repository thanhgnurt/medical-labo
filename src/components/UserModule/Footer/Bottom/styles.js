const styles = (theme) => ({
  bottom: {
    height: 75,
    flexGrow: 1,
    width: "100%",
  },
  content: {
    paddingTop: 20,
    display: "flex",
    color : theme.palette.primary.textColor,
    opacity : "80%"
  },
  text: {
    fontSize: 15,
    fontFamily: "'Quicksand', sans-serif",
    fontWeight : "500",
    overflow: "hidden",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box",
  },
  paper: {
    textAlign: "left",
    "& ul": {
      listStyle: "none",
      display: "flex",
      paddingLeft: 0,
      "& li": {
        paddingRight: 20,
        fontSize: 15,
        fontFamily: "'Quicksand', sans-serif",
        overflow: "hidden",
        "-webkit-line-clamp": 1,
        "-webkit-box-orient": "vertical",
        display: "-webkit-box",
        fontWeight : "500"
      },
    },

  },

  "@media (max-width: 960px)": {
    content: {
      "& ul": {
        justifyContent: "center",
      },
    },
    text: {
      textAlign: "center",
    },
  },
  //   "@media (max-width: 960px)": {
  //     content: {

  //     },
  //   },
});
export default styles;
