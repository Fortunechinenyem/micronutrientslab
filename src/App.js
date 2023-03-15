import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import Product from "./pages/Product";
import Distributor from "./pages/Distributor";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Team from "./pages/Team";
import Shop from "./pages/Shop";

function App() {
  return (
    <article>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/distributor" element={<Distributor />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </article>
  );
}

export default App;
