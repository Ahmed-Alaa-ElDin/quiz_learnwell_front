import { createTheme } from "@mui/material";

const LearnWellTheme = createTheme({
  palette: {
    primary: { main: "#274452", light: "#dde9ef" },
    danger: { main: "#e74c3c", light: "#e66254" },
    success: { main: "#27ae60", light: "#2ecc71" },
    contrast: { main: "#ecf0f1", contrastText: "#274452" },
    // warning: {main:"#27ae60",light:"#2ecc71"},
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          boxSizing: "border-box",
          color: "#f00",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});

export default LearnWellTheme;
