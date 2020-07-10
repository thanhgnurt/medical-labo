const styles = (theme) => ({
  globalLoading: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 10000,
    lineHeight : 500
  },
  icon: {
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    display:"block",
    position : "fixed",
    width: 70,
    height: 70,
    lineHeight : 500,
    top : '40%'
    
  },
  contentIcon: {
    width: "auto",
    height:"auto",
    justifyContent: "center",
    justifyItems: "center",
    alignItem: "center",
    lineHeight : 500
  },
});
export default styles;
