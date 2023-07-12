import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import UserContextProvider from "./context/UserContext.jsx";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {AuthProvider} from "./context/AuthContext.jsx";
import {ProductsProvider} from "./context/ProductsContext.jsx";
import {CssBaseline} from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#151515",
      alternative: "#001d3d",
    },
    secondary: {
      main: "#ffc300",
    },
    custom: {
      darkBlue: "#000814",
      blue: "#003566",
      yellow: "#ffd60a",
      purple: "#3d0079",
      lightPurple: "#E6E6FA",
    },
  },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <AuthProvider>
          <ProductsProvider>
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </ProductsProvider>
        </AuthProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
