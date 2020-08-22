const styles = (theme) => ({
  menuMains: {
    // fontFamily: "'Quicksand', sans-serif",
    // fontWeight : 500,
    letterSpacing: -0.4,
    textDecoration: "none",
    color: theme.palette.primary.extra,
    padding: "0 10px",
    fontSize: "15px",
    "&:hover": {
      color: theme.palette.primary.hoverColor,
    },
  },

  menuScrolled: {
    // fontFamily: "'Quicksand', sans-serif",
    letterSpacing: -0.4,
    // fontWeight : 500,
    textDecoration: "none",
    color: theme.palette.primary.textColor,
    padding: "0 10px",
    fontSize: "15px",
    "&:hover": {
      color: theme.palette.primary.hoverColor,
    },
  },
  selectedMenu: {
    color: theme.palette.primary.hoverColor,
  },
  active : {
    "& div" : {
      color :theme.palette.primary.hoverColor
    }
  },
  news :{
    color :theme.palette.primary.hoverColor 
  }
  
});
export default styles;
