import React from "react";

import Product1 from "../components/Product1";
import ProductHero from "../components/ProductHero";
import Footer from "../components/Footer";

import Product3 from "../components/Product3";
import Product4 from "../components/Product4";
import Product6 from "../components/Product6";

import DistributorLink from "../components/DistributorLink";

const Product = () => {
  return (
    <>
      <ProductHero />
      <Product1 />
      <Product6 />
      <Product3 />

      <Product4 />

      <DistributorLink />
      <Footer />
    </>
  );
};

export default Product;
