import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Features from "./routes/Features";
import Pricing from "./routes/Pricing";
import Action from "./routes/Action";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819"
  }
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({ colors, config });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/action" element={<Action />} />
      </Routes>
    </Router>
  </ChakraProvider>,
  rootElement
);
