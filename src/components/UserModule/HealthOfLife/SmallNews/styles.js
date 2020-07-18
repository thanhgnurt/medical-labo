const styles = (theme) => ({
  smallNews: {
    height: 50,
    marginBottom: 14,
    display :"flex"
  },
  imageSmall: {
    borderRadius: 5,
    height: "50px",
    width: "50px",
    objectFit: "cover",
    boxShadow:
    "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  tittleNews: {
    // fontSize: 15,
    // fontFamily: "'Quicksand', sans-serif",
    overflow: "hidden",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box",
    paddingLeft: 10,
    opacity : "90%"
  },
 

  smallTittle : {
    textAlign : "left"
  }
});
export default styles;
