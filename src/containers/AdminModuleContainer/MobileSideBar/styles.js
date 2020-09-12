const styles = (theme) => ({
  linkMobileMenu: {
    color: theme.palette.primary.textColor,
  },

  fullList: {
    height: "100%",
    backgroundColor: theme.palette.primary.backgroundPaper,
    zIndex: 100,
  },
  drawerPaper: {
    height: "auto",
  },
  listText: {
    marginLeft: 15,
    color: theme.palette.primary.textColor,
  },
  listItem:{
    padding : "10px 50px"

  },
  menuMobile: {
    position: "relative",
    zIndex: 1000,
    // display: "block",
    // [theme.breakpoints.up("sm")]: {
    //   display: "none",
    // },
  },
  closeIconContainer:{
    height : 58,
    background : "white",
    textAlign :"right",
    
    
  },
  iconClose:{
    marginTop : 15,
    fontSize : 30,
    marginRight : 20
  }
});
export default styles;
