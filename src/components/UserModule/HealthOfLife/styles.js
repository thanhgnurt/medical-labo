const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  header: {
    marginTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  imageLarge: {
    borderRadius: 4,
    width : "100%",
    height : "auto",
    objectFit: "cover",
  },
  textNews: {
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: "400",
    overflow: "hidden",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box",
  },

  seeMore: {
    textAlign: "center",
    marginTop: 30,
    "& button": {
      textTransform: "capitalize",
      fontSize: 16,
      fontWeight: 400,
      fontFamily:"'Quicksand', sans-serif",
    },
  },
  tittleNews: {
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: "600",
    fontSize: "15px",
    marginTop: 10,
  },
});
export default styles;
