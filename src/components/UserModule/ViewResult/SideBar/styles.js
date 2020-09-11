const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      marginLeft: 2,
      marginRight: 2,
      width: "100%",
    },
  },
  paper: {
    marginTop: -10,
  },
  listMenu: {
    width: "100%",
    marginTop: 10,
    paddingInlineStart : 0,
    textAlign :"center",
  },
  listMenuDropdown:{
      width: "100%",
      textAlign:"center",
      paddingInlineStart : 0,
  },

  itemList: {
    listStyle: "none",
    padding: 10,
    "&:hover": {
      color: theme.palette.primary.hoverColor,
    },
    "& a":{
      color : "black",
      "&:hover": {
        color: theme.palette.primary.hoverColor,
      },
    }
  },
  tittle: {
    border: "1px solid rgba(255, 255, 255, 0.432)",
    marginTop: 10,
    padding: " 12px 0px",
    textAlign: "center",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  "@media screen and (max-width: 959px)": {
    menuDesktop: {
      display: "none",
    },
  },
  dropdown: {
    marginBottom: 15,
    marginTop: 5
  },
  "@media screen and (min-width: 960px)": {
    dropdown: {
      display: "none",
    },
  },
  active :{
      color: "red !important"
  
  },
  activeFirst:{
    color : "red !important"
  }
});
export default styles;
