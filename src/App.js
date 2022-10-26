import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Navbar from "../src/components/navbar/Navbar";
import Search from "./pages/search/Search";
import CartModal from "./components/cart/CartModal";

import { useContext } from 'react';
import { CartContext } from './context/CartContext';


export default function App() {
  const { showCart } = useContext(CartContext)
  return (
    <div className="App">
      <Navbar />
      {showCart && <CartModal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
