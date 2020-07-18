const styles = (theme) => ({
  textNews: {
    fontSize: 13,
    // textAlign: "justify",
    // fontFamily: "'Quicksand', sans-serif",
    // fontWeight: "400",
    overflow: "hidden",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box",
  },

  imageMedium: {
    height: "auto",
    width:"100%",
    objectFit: "cover",
    borderRadius: 5,
    boxShadow:
    "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },

  tittleNews: {
    // fontFamily: "'Quicksand', sans-serif",
    // fontWeight: "600",
    fontSize: 15,
    marginTop: 10,
    opacity : "90%",
    marginBottom : 10
    
  },
});

export default styles

