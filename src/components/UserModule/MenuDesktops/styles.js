const styles = (theme) => ({
  menuMains: {
    textDecoration: "none",
    color: theme.palette.primary.extra,
    padding: "0 10px",
    fontSize: "14px",
    "&:hover": {
      color: theme.palette.primary.hoverColor,
    },
  },

  menuScrolled: {
    textDecoration: "none",
    color: theme.palette.primary.textColor,
    padding: "0 10px",
    fontSize: "14px",
    "&:hover": {
      color: theme.palette.primary.hoverColor,
    },
  },
  selectedMenu: {
    color: theme.palette.primary.hoverColor,
  },
});
export default styles;
