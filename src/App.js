import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/Navbar";
import Product from "./pages/Product";
import Distributor from "./pages/Distributor";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";

function App() {
  return (
    <article>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/distributor" element={<Distributor />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </article>
  );
}

export default App;
