const styles = (theme) => ({
  appBarQueryScroll: {
    backgroundColor: theme.palette.primary.navbarScroll,
    color: theme.palette.primary.textColor,
    "& a" : {
      color : theme.palette.primary.textColor
    }
    
   
  },

  defaultAppBar:{
    color:theme.palette.primary.extra,
    "& a" : {
      color : theme.palette.primary.extra
    }
  },

  grow: {
    flexGrow: 1,
    
  },
  menuButton: {
    
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  listMenuMobile: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.appBar.main,
  },

  // responsive

  iconLogin: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  buttonLogin: {
    fontFamily: "'Quicksand', sans-serif",
    fontWeight : 600,
    display: "block",
    textTransform: "none",
    height: 35,
    marginTop: 6,
    borderRadius: "100px",
    borderBottom: "1px solid white",
    backgroundColor: theme.palette.secondary.extra,
    color : theme.palette.secondary.textColor,
    "&:hover": {
      backgroundColor: theme.palette.primary.hoverColor,
      boxShadow: `0 0 0 0.2rem ${theme.palette.secondary.boxShadow}`,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonLoginMobile :{
    fontFamily: "'Quicksand', sans-serif",
    fontWeight : 600,
    textTransform: "none",
    height: 35,
    marginTop: 6,
    borderRadius: "100px",
    borderBottom: "1px solid white",
    backgroundColor: theme.palette.secondary.extra,
    color : theme.palette.secondary.textColor,
    "&:hover": {
      backgroundColor: theme.palette.primary.hoverColor,
      boxShadow: `0 0 0 0.2rem ${theme.palette.secondary.boxShadow}`,
    },
  },
  menu_list: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    width: "100%",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    justifyContent: "flex-end",
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    justifyContent: "flex-end",
  },
  logo :{
    display : "flex",
    width : 80
  },

  
});
export default styles;
