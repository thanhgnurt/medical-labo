const styles = (theme)=>({
    root: {
        "& > *": {
          marginTop: theme.spacing(2),
        },
        textAlign: "center",
      
      },
      countPage :{
        "& ul" : {
          "& li" : {
            "& button":{
              color : theme.palette.primary.textColor
            }
          }
        }
        
      },
      });
export default styles;