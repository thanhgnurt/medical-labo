const styles = theme =>({
    globalLoading: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex : 10000,
        justifyContents : 'center',
        justifyItems : 'center',
        textAlign : "center",
      },
      icon: {
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        display : "block",
        position: "fixed",
        top : '40%',
        width: 70,
        height : 70
      },
});
export default styles;
