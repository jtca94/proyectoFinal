import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider, createTheme} from "@mui/material/styles";

const theme = createTheme({
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
    },
  },
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
