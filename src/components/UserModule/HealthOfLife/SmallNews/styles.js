const styles = (theme) => ({
  smallNews: {
    "& div":{

      height: 50,
      marginBottom: 14,
      display :"flex"
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
  tittleNews: {
    overflow: "hidden",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box",
    opacity : "90%",
    color: theme.palette.primary.textColor,
    // marginTop:15
  },
 

  smallTittle : {
    textAlign : "left"
  }
});
export default styles;
