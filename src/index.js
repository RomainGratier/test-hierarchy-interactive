import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./stylesheet/main.scss";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
