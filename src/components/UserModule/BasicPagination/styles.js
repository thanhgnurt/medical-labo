const styles = (theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(3),
      // "& button" :{
      //   fontFamily: "'Quicksand', sans-serif",
      // fontWeight : 600,
      // }
    
    },
  },

  countPage: {
    "& ul": {
      "& li": {
        "& button": {
          color: theme.palette.primary.textColor,
        },
      },
    },
  },

 
});
export default styles;
