"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat Alternates",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#ffc0cb",
    },
    secondary: {
      main: "#f50057",
    },
  },
  customShadow:
    "hsla(220, 30%, 5%, 0.09) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px",
  dark: "#4d041c",
  light: "#fff1f3",
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "none",
        }
      }
    }
  }
});

export default theme;
