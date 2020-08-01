const drawerWidth = 240;
const styles = (theme) => ({
 
  root: {
    display: "flex",
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  // hide: {
  //   display: 'none',
  // },
  drawer: {
    "& .MuiDrawer-paper":{
      overflowY: "visible"
  
    },
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    position: "relative",
  },
  drawerOpen: {
    overflowX: "hidden",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      // width: theme.spacing(9) + 1,
    },
  },
  bg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  img_bg: {
    position: "absolute",
    objectFit: "cover",
    filter: "blur(15px)",
  },

  listMenu: {
    position: "relative",
    zIndex: 10,
    color : "white"
  },
  toolbar: {
    position: "relative",
  },
  icon :{
    color : "white"
  }
});
export default styles;
