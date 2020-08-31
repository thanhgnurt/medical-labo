const styles = (theme) => ({
  linkMobileMenu: {
    color: theme.palette.primary.textColor,
  },

  fullList: {
    top: 65,
    width: 200,
    height: "100%",
    backgroundColor: theme.palette.primary.backgroundPaper,
    position: "fixed",
    zIndex: 1000,
  },
  drawerPaper: {
    height: "auto",
  },
  listText: {
    marginLeft: 15,
    color: theme.palette.primary.textColor,
  },
  menuMobile : {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

});
export default styles;
