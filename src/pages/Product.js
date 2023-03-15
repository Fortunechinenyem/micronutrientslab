import React from "react";

import Product1 from "../components/Product1";
import ProductHero from "../components/ProductHero";
import Footer from "../components/Footer";
import Product2 from "../components/Product2";
import Testimonials from "../components/Testimonials";
import Product3 from "../components/Product3";
import Product4 from "../components/Product4";

const Product = () => {
  return (
    <>
      <ProductHero />
      <Product1 />
      <Product3 />

      <Testimonials />
      <Product4 />
      <Product2 className="mb-4" />
      <Footer />
    </>
  );
};

export default Product;
