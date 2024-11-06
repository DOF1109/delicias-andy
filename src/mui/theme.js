"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
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
});

export default theme;
