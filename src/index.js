import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "../src/fonts/Satoshi-Regular.ttf";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import font from "../src/fonts/Satoshi-Regular.ttf";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: `
      @font-face{
        font-family: 'Satoshi';
        font-style: normal;
        src: local('Satoshi'), local('satoshi-Regular'), url(${font}) format('truetype');

      }
      `,
    },
  },

  typography: {
    fontFamily: ["Satoshi"],
  },
});

root.render(
  <React.StrictMode>
    <Helmet>
      <title>Amirreza Mirshafiee</title>
      <meta name="Amirreza Mirshafiee" content="Amirreza Mirshafiee" />
    </Helmet>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
