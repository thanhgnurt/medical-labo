const styles = (theme) => ({
  imgBacground: {
    backgroundImage: "url(/images/bg-footer.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "none",
    backgroundPosition: "center",
    height: 400,
    position :"relative"
  },
  layout: {
    backgroundColor: "rgb(10, 32, 41)",
    height: "100%",
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
  hr: {
    borderBottom: "0.5px solid white",
    width: "70%",
    opacity: "50%",
  },

  // responsive

  "@media (min-width: 960px)": {
    content: {
      display: "flex",
      padding : "40px 0px"
    },
  },
  "@media (max-width: 960px)": {
    content: {
      display: "flex",
      padding : "40px 40px"
    },
  },
});
export default styles;
