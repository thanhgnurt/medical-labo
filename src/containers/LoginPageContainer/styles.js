const styles = (theme)=>({
    tittle:{
        marginBottom: 20
    },
    bg: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: "100%",
        "& img": {
          filter: "blur(15px)",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          position :"absolute",
          margin: "-11px 0 -5px -10px",
          width: "calc(100% + 5px)",
          objectFit: "cover",
        },
      },
      root: {
        display: "flex",
        position: "relative",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 50,
    
        // marginTop:"10%",
        "& > *": {
          margin: theme.spacing(1),
          width: 420,
          textAlign: "center",
        },
      },
      paper: {
        padding: "20px 20px ",
      },

      buttonLogin: {
        marginTop: 20,
        textAlign: "right",
      },
      b_login: {
        marginRight: 10,
      },
      content: {
        position: "absolute",
        zIndex: 5,
        top: 0,
        left: 0,
        right: 0,
        bottom:0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    
        margin: "auto",
      },
      note1:{
          marginBottom: 20,
          color: "rgb(201, 147, 32)"
      },
      note2:{
          marginBottom: 20,
          color: "red"
      },
      signup:{
          marginTop: 20
      }

    
});
export default styles;