const styles = (theme) => ({
  appBarQueryScroll: {
    backgroundColor: theme.palette.primary.backgroundPaper,
    color: theme.palette.primary.textColor,
   
  },

  defaultAppBar:{
    color:theme.palette.primary.extra,
    
  },

  grow: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
    display: "block",
    textTransform: "none",
    height: 35,
    marginTop: 6,
    borderRadius: "100px",
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
    display : "flex"
  },
  
});
export default styles;
