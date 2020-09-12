
const styles = theme =>({
  appBar:{
    position:"relative",
    zIndex : 100

  },

 
  // header :{
  //   width : "100%"
  // },
  menuPerson :{
    margin : "5px 10px",
    color :"black"
  },

  buttonMenuToggle:{
    margin : "5px 10px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  buttonMenuToggleMobile :{
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }

  
});
export default styles;
