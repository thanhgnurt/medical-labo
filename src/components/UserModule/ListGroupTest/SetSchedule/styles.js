const styles= theme=>({
    container: {
     
    },

    root: {
      
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
        height: "auto",
      },
    },
    paper: {
      padding: "20px ",
      textAlign: "center",
      borderRadius : 10,
    },
    setSchedule: {
      position: "relative",
      "& img": {
        filter: "blur(15px)",
        minHeight: "700px",
        margin: "-11px 0 -5px -10px",
        width: "calc(100% + 5px)",
      },
    },
    content: {
      position: "absolute",
      zIndex: 5,
      top: 0,
      left: 0,
      right: 0,
      maxWidth: 700,
      margin: "auto",
    },
    background: {
      background: theme.palette.primary.backgroudSetSchedule,
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    tittle: {
      marginBottom: "10px",
    },

    buttonLogin: {
      textAlign: "center",
      marginBottom : 20
    },
    b_login: {
      marginRight: 10,
    },
    note: {
      marginTop: 20,
    },
    textField: {
      marginTop: 30,
    },
    messageValidate: {
      textAlign: "left",
      color: "red",
      marginTop: 5,
    },
    div: {
      height: 450,
    },
    contact:{
      marginTop : 20,
      color : theme.palette.primary.hoverColor
    },
    buttonContact:{
      fontWeight: "900",
      fontSize : 16,
      padding: 15,
      borderRadius : "30px !important",
      background : "#F1F5FA"
    },
    divider :{
      padding : "40px 0px"
    },
    phoneIcon:{
      marginRight : 10
    }
});
export default styles;