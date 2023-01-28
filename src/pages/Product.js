import React from "react";
import Itemcard from "../components/productcart/Itemcard";
import Data1 from "../components/productcart/Data";
import Product1 from "../components/Product1";
import ProductHero from "../components/ProductHero";

const Product = () => {
  return (
    <>
      <ProductHero />
      <Product1 />
      <section className="py-4 container">
        <div className="row justify-content-center">
          {Data1.cognito.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Product;
