const styles = (theme) => ({
  imageLarge: {
    borderRadius: 5,
    width: "100%",
    height: "200px",
    objectFit: "cover",
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  //   tittleNews: {
  //     marginTop: 10,
  //     opacity : "90%",
  //     marginBottom : 15,
  //     color: theme.palette.primary.textColor

  //   },
  imageMedium: {
    height: "120px",
    width: "100%",
    objectFit: "cover",
    borderRadius: 5,
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },

  tittleNews: {
    fontSize: 15,
    marginTop: 10,
    opacity: "90%",
    marginBottom: 10,
    color: theme.palette.primary.textColor,
    "&:hover":{
        color : theme.palette.primary.hoverColor
    }
  },
  imageSmall: {
    borderRadius: 5,
    height: "50px",
    width: "50px",
    objectFit: "cover",
    marginRight: 10,
    boxShadow:
    "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  tittleNewsSmall: {
    fontSize: 15,
    overflow: "hidden",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box",
    opacity : "90%",
    color: theme.palette.primary.textColor,
    "&:hover":{
        color : theme.palette.primary.hoverColor
    }
  },
});
export default styles;
