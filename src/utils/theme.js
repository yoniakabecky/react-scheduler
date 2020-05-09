import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#262223",
    },
    secondary: {
      main: "#FF4081",
    },
  },
  typography: {
    // htmlFontSize: 10
  },
  global: {
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      height: "calc(100vh - 56px)",
      alignContent: "center",
    },
  },
});
