const styles = (theme) => ({
  smallNews: {
    height: 50,
    marginBottom: 15,
    display :"flex"
  },
  imageSmall: {
    borderRadius: 4,
    height: "50px",
    width: "50px",
    objectFit: "cover",
  },
  tittleNews: {
    fontSize: 15,
    fontFamily: "'Quicksand', sans-serif",
    overflow: "hidden",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box",
    paddingLeft: 10,
  },
 

  smallTittle : {
    textAlign : "left"
  }
});
export default styles;
