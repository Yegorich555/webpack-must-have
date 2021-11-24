import React from "react";
import ReactDom from "react-dom";
import "./styles/main.scss";
import App from "./App";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
