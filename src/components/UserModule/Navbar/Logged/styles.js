const styles = (theme) => ({
    sectionDesktop: {
      display: "none",
      alignItems :"center",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      },
      justifyContent: "flex-end",
    },
    iconLogin: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    buttonLogin: {
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 600,
      display: "block",
      textTransform: "none",
      height: 35,
      marginTop: 6,
      borderRadius: "100px",
      borderBottom: "1px solid white",
      backgroundColor: theme.palette.secondary.extra,
      color: theme.palette.secondary.textColor,
      "&:hover": {
        backgroundColor: theme.palette.primary.hoverColor,
        boxShadow: `0 0 0 0.2rem ${theme.palette.secondary.boxShadow}`,
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    sectionMobile: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
      justifyContent: "flex-end",
    },
    logo: {
      display: "flex",
      width: 80,
    },
    buttonLoginMobile: {
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 600,
      textTransform: "none",
      height: 35,
      marginTop: 6,
      borderRadius: "100px",
      borderBottom: "1px solid white",
      backgroundColor: theme.palette.secondary.extra,
      color: theme.palette.secondary.textColor,
      "&:hover": {
        backgroundColor: theme.palette.primary.hoverColor,
        boxShadow: `0 0 0 0.2rem ${theme.palette.secondary.boxShadow}`,
      },
    },
    containerAvatar:{
        
    },
    avatar: {
      
        width: 37,
        height: 37,
        position : "relative",
        top : "50%",
        backgroundColor : "beige",
        padding : 6
      },
      menuUser :{
        marginTop : 50,
        
      },
      iconLogged: {
        minWidth : 40
      },
      hello:{
        display :"none"
      },
      "@media (min-width: 800px)": {
       
        hello:{
          display :"flex"
        },
      },
 
      
  });
  export default styles;
  