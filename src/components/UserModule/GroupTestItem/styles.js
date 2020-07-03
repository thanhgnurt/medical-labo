const styles = theme =>({
    root: {
        maxWidth: 345,
        // backgroundColor: theme.palette.primary.backgroundGrounpTestItem,
        // color: theme.palette.primary.textColor,
      },
      media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
      },
      expand: {
        // color: theme.palette.primary.textColor,
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shortest,
        }),
        // "&:hover": {
        //   boxShadow: `0 0 0 0.2rem ${theme.palette.secondary.boxShadow}`,
        // },
      },
      expandOpen: {
        transform: "rotate(180deg)",
      },
      avatar: {
        backgroundColor: theme.palette.primary.hoverColor,
        // boxShadow: `0 0 0 0.2rem ${theme.palette.secondary.boxShadow}`,
      },
      button: {
        left: 8,
        bottom: 0,
        // color: theme.palette.primary.textColor,
        "&:hover": {
          backgroundColor: theme.palette.primary.hoverColor,
          boxShadow: `0 0 0 0.2rem ${theme.palette.secondary.boxShadow}`,
        },
      },
      descreption: {
        // color: theme.palette.primary.textColor,
      },
});
export default styles;