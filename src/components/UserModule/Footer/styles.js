
const styles = (theme) => ({
  imgBacground: {
    // backgroundImage: "url(/images/bg-footer.jpg)",
    // backgroundSize: "cover",
    // backgroundRepeat: "none",
    // backgroundPosition: "center",
    // height: 400,
    position :"relative"
  },

  images:{
    marginTop: 100,
    filter: "blur(15px)",
    height:180,
    margin: "30px 0 -5px -10px",
    width: "calc(100% + 5px)",
    position: "absolute",
    objectFit: "cover",

  },
  divider:{
    backgroundColor:"rgba(255, 255, 255, 0.3)",
    // height : 0.5
  },

  
  layoutSecondary: {
    backgroundColor: theme.palette.primary.layoutFooter,
    height: "100%",
    position: "relative",
    zIndex: 10,
  },
  layoutPrimary : {
    backgroundColor : theme.palette.primary.layoutFooterHome,
    height : "100%",
    position: "relative",
    zIndex: 10,
  },


  content: {
    flexGrow: 1,
  },
  paper: {
    color: "white",
    fontSize: 25,
    fontFamily: "'Quicksand', sans-serif",
  },
  contentAbout: {
    color: "#f8f9fa",
    letterSpacing: 1,
    lineHeight: 1.9,
    fontSize: 15,
    fontWeight: 200,
    padding: "15px 0px",
    fontFamily: "'Quicksand', sans-serif",
  },


  css_ul:{
    "& li":{
      // listStyle:"none"
    },
    marginLeft: -15
  },

  // responsive

  "@media (min-width: 960px)": {
    content: {
      display: "flex",
      padding : "40px 0px"
    },
    images:{
      height:183,
    },
  },
  // "@media (max-width: 960px)": {
  //   images:{
  //     height:483,
  //   },
  //   content: {
  //     display: "flex",
  //     padding : "40px 0px"
  //   },
  // },
  // "@media (max-width: 800px)": {
  //   images:{
  //     height:483,
  //   },
  
  // },
  "@media (max-width: 960px)": {
    content: {
      display: "flex",
      padding : "40px 0px"
    },
    images:{
      height:383,
    },
    footerContentRight:{
      marginTop : 20
    }
  },
  // "@media (max-width: 600px)": {
  //   images:{
  //     height:483,
  //   },
  // },
  // "@media (max-width: 500px)": {
  //   images:{
  //     height:483,
  //   },
  // },
  // "@media (max-width: 550px)": {
  //   images:{
  //     height:483,
  //   },
  // },
  // "@media (max-width: 450px)": {
  //   images:{
  //     height:483,
  //   },
  // },
  "@media (max-width: 374px)": {
    images:{
      height:440,
    },
  },


});
export default styles;
