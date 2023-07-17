import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import CartContextProvider from "./context/CartContext.jsx";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {AuthProvider} from "./context/AuthContext.jsx";
import {ProductsProvider} from "./context/ProductsContext.jsx";
import {CssBaseline} from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#151515",
      alternative: "#00ff00",
    },
    secondary: {
      main: "#ffc300",
    },
    custom: {
      lightGreen: "#DFF8D5",
      lightBlue: "#00D0B2",
      greyGreen: "#8BAF7F",
      blue: "#004C73",
      yellow: "#ffd60a",
      purple: "#3d0079",
      lightPurple: "#E6E6FA",
    },
    error: {
      main: "#ff0000",
    },
  },
  typography: {
    fontFamily: "Space Grotesk, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <AuthProvider>
          <ProductsProvider>
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </ProductsProvider>
        </AuthProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
