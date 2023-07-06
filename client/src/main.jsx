/* eslint-disable react/no-unknown-property */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import { themeProvider} from "@mui/material";

const theme = themeProvider({
  palette: {
    primary: {
      main: "#001d3d",
    },
    secondary: {
      main: "#ffc300",
    },
    custom: {
      darkBlue: "#000814",
      blue: "#003566",
      yellow: "#ffd60a",
    }
  },
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <themeProvider theme={theme}>
      <App />
      </themeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
