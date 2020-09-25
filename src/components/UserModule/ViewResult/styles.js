const heightScreen =window.innerHeight -384.1;

const styles = theme =>({
    contentResult :{
        minHeight :heightScreen,
        marginTop : -10,
    },
    sidebar :{
        width : "100%"
    },
    root: {
        width: "100%",
        padding: "0 2px",
      },
    paper: {
        width: "100%",
        marginBottom: theme.spacing(2),
      },
});
export default styles;
