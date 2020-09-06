const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
    color : theme.palette.primary.textColor
  },
  heathOfLife:{
    marginBottom : 50
  },
  header: {
    marginTop: 20,
    color : theme.palette.primary.hoverColor
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  imageLarge: {
    borderRadius: 5,
    width : "100%",
    height : "auto",
    objectFit: "cover",
    boxShadow:
    "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  textNews: {
    fontSize: 13,
    textAlign: "justify",
    // fontFamily: "'Quicksand', sans-serif",
    // fontWeight: "400",
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
      // fontWeight: 400,
      // fontFamily:"'Quicksand', sans-serif",
    },
  },
  tittleNews: {
    // fontFamily: "'Quicksand', sans-serif",
    // fontWeight: "600",
    // fontSize: "15px",
    marginTop: 10,
    opacity : "90%",
    marginBottom : 15,
    color : "black"

  },
});
export default styles;
