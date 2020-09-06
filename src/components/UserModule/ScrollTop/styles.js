
const styles = (theme) => ({
  root: {
    position: "fixed",
    bottom: 12,
    right: 12,
    zIndex : 999,
  },
  backToTop : {
    backgroundColor : theme.palette.primary.backToTop,
    color : theme.palette.secondary.textColor,
    "&:hover": {
      backgroundColor: theme.palette.primary.hoverColor,
      boxShadow: `0 0 0 0.2rem ${theme.palette.secondary.boxShadow}`,
    },
  },
  defaultAppBar: {

  },
 
  appBarQueryScroll: {
  
  },

  grow: {
   
  },
  menuButton: {

  },

  paper: {
   
  },

  listMenuMobile: {

  },

  // responsive

  iconLogin: {
 
  },
  buttonLogin: {

  },
  menu_list: {
 
  },

  sectionDesktop: {
 
  },

  sectionMobile: {
 
  },

  logo :{
    
  },
  buttonLoginMobile :{
    
  },
  menuScrolled : {

  },
  menuMains :{

  },
  selectedMenu:{

  },
  active :{

  },
  result : {

  },


  imgLogo :{
  },
  name:{
  },
  buttonTheme:{
  },
  charUnder:{
  }






 
});
export default styles;
