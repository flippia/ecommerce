import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import './index.css';

import App from "./App";
import { CartProvider } from "./context/CartContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
  rootElement
);
