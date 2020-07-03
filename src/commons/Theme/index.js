import { createMuiTheme } from "@material-ui/core/styles";
import { COLORS } from "./../../constantPages/colors";
export const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.BLUE,
      extra: COLORS.LIGHT,
      textColor: COLORS.DARK,
      hoverColor: COLORS.YELLOW,
      cancel: COLORS.GRAY,
      backToTop : COLORS.BLUE_O,
      backgroundPaper : COLORS.LIGHT_O,
      backgroundGrounpTestItem : COLORS.LIGHT_0
      
    },
    secondary: {
      main: COLORS.BLUE_O,
      extra: COLORS.BLUE,
      boxShadow : COLORS.YELLOW_H,
      textColor: COLORS.LIGHT,
      hoverColor: COLORS.ORANGE,
      cancel: COLORS.GRAY,
    },
    appBar: {
      main: "rgba(255, 255, 255, 0.95)",
    },
    grayLight: {
      main: "rgb(236, 68, 68)",
    },
  },
  background: {
    login: {
      main: "rgba(255, 255, 255, 0.5)",
    },
  },
});

export const themeDark = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.DARK_O9,
      extra: COLORS.LIGHT,
      textColor: COLORS.LIGHT,
      hoverColor: COLORS.ORANGE,
      cancel: COLORS.GRAY,
      backToTop : COLORS.DARK_O,
      backgroundPaper : COLORS.DARK_O,
      backgroundGrounpTestItem : COLORS.DARK_LIGHT
    },
    secondary: {
      main: COLORS.ORANGE_O,
      extra: COLORS.DARK,
      boxShadow : COLORS.ORANGE_H,
      textColor: COLORS.LIGHT,
      hoverColor: COLORS.ORANGE,
      cancel: COLORS.GRAY,
    },
    appBar: {
      main: "rgba(255, 255, 255, 0.95)",
    },
    grayLight: {
      main: "rgb(236, 68, 68)",
    },
  },
  background: {
    login: {
      main: "rgba(255, 255, 255, 0.5)",
    },
  },
});
