

const styles = (theme) => ({
  root: {
    position: "relative",
    marginTop:50,
    borderRadius : 6,
    "&:hover img" :{
      top : -80,
      transitionDuration: "0.2s",
      
    }
  },

  media: {
    justifyContent: "center",
    top: -30,
    width: "90%",
    height : "180px",
  
    borderRadius: 6,
    position: "relative",
    pointEvents: "none",
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    zIndex: 10,
    objectFit: "cover",
   
  },


  button: {
    left: 8,
    bottom: 0,
    "&:hover": {
      backgroundColor: theme.palette.primary.hoverColor,
      boxShadow: `0 0 0 0.2rem ${theme.palette.secondary.boxShadow}`,
      color: theme.palette.primary.textColor,
    },
  },

  tittle : {
    padding : 0,
    marginTop : -20,
    
    "& span" :{
      fontSize : 18,

    }
  },

  detail :{
    marginTop : -60,
    position : "absolute",
    justifyContent : "center",
    left: '50%',
    transform: 'translate(-50%, -50%)',
  
  },
  description :{
    overflow: "hidden",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box",
    textAlign : "justify"
  }
});
export default styles;
