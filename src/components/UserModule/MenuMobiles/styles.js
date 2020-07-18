const styles = (theme) => ({
  linkMobileMenu: {
    color: theme.palette.primary.textColor,
  },

  fullList: {
    width: "100%",
    height: "100%",
    backgroundColor : theme.palette.primary.backgroundPaper,
    position : "fixed",
    zIndex : 1000
    
  },
  drawerPaper: {
    height: "auto",
  },
  listText: {
    marginLeft: 15,
    color: theme.palette.primary.textColor,
  },
 
});
export default styles;
