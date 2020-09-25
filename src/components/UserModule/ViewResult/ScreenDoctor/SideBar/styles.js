import { fade } from '@material-ui/core/styles';
const heightScreen = window.innerHeight;
const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      marginLeft: 2,
      marginRight: 2,
      width: "100%",
    },
    // border: "2px solid black",
    height: "100%",
    paddingBottom: 16,
  },
  menuDesktop: {
    overflow: "auto",
    height: heightScreen,
  },
  paper: {
    marginTop: -20,
  },
  listMenu: {
    width: "100%",
    paddingInlineStart: 0,
    textAlign: "center",
  },
  listMenuDropdown: {
    width: "100%",
    textAlign: "center",
    paddingInlineStart: 0,
  },

  itemList: {
    listStyle: "none",
    padding: 10,
    "&:hover": {
      color: theme.palette.primary.hoverColor,
    },
    "& a": {
      color: "black",
      fontSize : 13,
    
      // "&:hover": {
      //   color: theme.palette.primary.hoverColor,
      // },
    },
  },
  activeItem:{
    listStyle: "none",
    padding: 10,
    background : theme.palette.primary.main,
    "&:hover": {
     color :"white",
      background : theme.palette.primary.main,
    },
    "& a": {
      color: "white",
      fontSize : 16,
      "&:hover": {
        // color: theme.palette.primary.main,
        color :"white",
      },
    },
    
  },
  tittle: {
    border: "1px solid rgba(255, 255, 255, 0.432)",
    marginTop: 10,
    padding: " 3.8px 0px",
    textAlign: "center",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  // "@media screen and (max-width: 959px)": {
  //   menuDesktop: {
  //     display: "none",
  //   },
  // },
  // dropdown: {
  //   marginBottom: 15,
  //   marginTop: 5
  // },
  // "@media screen and (min-width: 960px)": {
  //   dropdown: {
  //     display: "none",
  //   },
  // },
  // active: {
  //   color: `${theme.palette.primary.hoverColor} !important`,
  // },
  // activeFirst: {
  //   color: `${theme.palette.primary.hoverColor} !important`,
  // },
  divider: {
      marginTop: 30,
      color: "red",
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  year: {
    color: "blue",
  },
});
export default styles;
