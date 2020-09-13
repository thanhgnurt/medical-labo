const styles = (theme) => ({


  fullList: {
    width: "100%",
    height: "100%",
    backgroundColor : theme.palette.primary.backgroundPaper,
    position : "fixed",
    zIndex : 1000,
    "& a":{
      color: theme.palette.primary.textColor
    }
    
  },
  drawerPaper: {
    height: "auto",
  },
  listText: {
    marginLeft: 15,
    color: theme.palette.primary.textColor,
  },
  activeResult:{
    marginLeft: 15,
    color: theme.palette.primary.hoverColor,
  },
  activeSelection:{
    color:theme.palette.primary.hoverColor
  },
  active : {
    "& div" : {
      color :theme.palette.primary.hoverColor
    }
  },
  activeiconResult:{
    color: theme.palette.primary.hoverColor,
  }
 
});
export default styles;
