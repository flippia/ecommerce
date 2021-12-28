import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import './index.css';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
