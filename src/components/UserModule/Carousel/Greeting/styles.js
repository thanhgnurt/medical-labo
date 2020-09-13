const styles = (theme) => ({
  greeting: {
    position: "absolute",
    height: "80%",
    width: "70%",
    zIndex: 2000000000,
    background: "rgba(255, 255, 255, 0.7)",
    top: 30,
    left: -10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: "250px",
    // boxShadow: "0 4px 4px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.2)",
    // borderBottom:"10px solid rgba(0, 0, 0, 0.3)",
    boxShadow: "0 0 0 0.5rem rgba(255, 255, 255, 0.15)",
    marginLeft: 128,
  },
  tittle: {
    fontSize: 36,
    color: "#111c63",
    fontWeight: "700",
    margin: "20px 20px 10px 20px",
    letterSpacing: "-0.4px",
  },
  "@media screen and (max-width:1100px)": {
    greeting: {
      borderBottomRightRadius: "200px",
    },
    tittle: {
      fontSize: 32,
      color: "#111c63",
      fontWeight: "700",
      margin: "20px 20px 5px 20px",
      letterSpacing: "-0.4px",
    },
  },
  "@media screen and (max-width: 1000px)": {
    containerText: {
      display: "none",
    },
    greeting: {
      borderBottomRightRadius: "200px",
      height: "80%",
      width: "80%",
    },
    tittle: {
      fontSize: 28,
      color: "#111c63",
      fontWeight: "700",
      margin: "20px 20px 10px 20px",
      letterSpacing: "-0.4px",
    },
  },
  "@media screen and (max-width: 900px)": {
    containerText: {
      display: "none",
    },
    greeting: {
      borderBottomRightRadius: "200px",
      height: "80%",
      width: "80%",
    },
    tittle: {
      fontSize: 26,
      color: "#111c63",
      fontWeight: "700",
      margin: "20px 20px 10px 20px",
      letterSpacing: "-0.4px",
    },
  },
  "@media screen and (max-width: 800px)": {
    containerText: {
      display: "none",
    },
    greeting: {
      borderBottomRightRadius: "10px",
      height: "80%",
      width: "75%",
      left: 0,
    },
    tittle: {
      fontSize: 26,
      color: "#111c63",
      fontWeight: "700",
      margin: "20px 20px 10px 20px",
      letterSpacing: "-0.4px",
    },
  },
  "@media screen and (max-width: 700px)": {
    containerText: {
      display: "none",
    },
    greeting: {
      borderBottomRightRadius: 10,
      height: "80%",
      width: "90%",
      marginLeft: 0,
      left: 0,
    },
    tittle: {
      fontSize: 26,
      color: "#111c63",
      fontWeight: "700",
      margin: "20px 20px 10px 20px",
      letterSpacing: "-0.4px",
    },
  },
  "@media screen and (max-width: 600px)": {
    containerText: {
      display: "none",
    },
    greeting: {
      borderBottomRightRadius: "10px",
      height: "80%",
      width: "95%",
      marginLeft: 0,
      left: 0,
    },
    tittle: {
      fontSize: 26,
      color: "#111c63",
      fontWeight: "700",
      margin: "20px 20px 10px 20px",
      letterSpacing: "-0.4px",
    },
  },

  button: {
    marginLeft: 20,
    marginTop: 10,
  },
  divButton: {
    marginTop: 20,
  },
  contentText: {
    fontSize: 18,
    marginLeft: 20,
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: "500",
    marginRight: 20,
    paddingTop: 5,
    letterSpacing: "-0.6px",
  },
});
export default styles;
