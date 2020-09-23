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
  imageSmall: {
    borderRadius: 5,
    height: "50px",
    width: "50px",
    objectFit: "cover",
    marginRight: 10,
    boxShadow:
    "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  imageMedium: {
    height: "120px",
    width: "100%",
    objectFit: "cover",
    borderRadius: 5,
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },


  tittleNews: {
    fontSize: 16,
    marginTop: 10,
    opacity: "90%",
    marginBottom: 10,
    color: theme.palette.primary.textColor,
    "&:hover":{
        color : theme.palette.primary.hoverColor
    }
  },
  iconSmallNews:{
    position :"absolute",
    marginTop : 35,
    "& button":{
      padding :"5px !important",
      height : 35,
      width : 35,
      marginRight: 10
    }
  },

  tittleNewsSmall: {
    fontSize: 16,
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
  smallDescription:{
    overflow: "hidden",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box !important",
    lineHeight : "23px"
  
  },
  "@media screen and (min-width: 992px)": {
    imageMedium: {
      height: "200px",
    },
    imageLarge: {
      height : 250
    },
    imageSmall: {
      height: "70px",
      width: "70px",
    },
  },
  "@media screen and (max-width: 599px)": {
  
    imageSmall: {
      height: "70px",
      width: "70px",
    },
  },

});
export default styles;
