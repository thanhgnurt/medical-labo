const styles = (theme) => ({

    imageLarge: {
      borderRadius: 5,
      width : "100%",
      height : "200px",
      objectFit: "cover",
      boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    textNews: {
      fontSize: 13,
      textAlign: "justify",
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
      },
    },
    tittleNews: {
      marginTop: 10,
      opacity : "90%",
      marginBottom : 15,
      color: theme.palette.primary.textColor
  
    },
  });
  export default styles;
  