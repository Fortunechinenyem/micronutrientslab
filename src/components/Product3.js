import React from "react";
import Itemcard from "../components/productcart/Itemcard";
import Data1 from "../components/productcart/Data";

const Product3 = () => {
  return (
    <section className="container mt-2 mb-2">
      <div className=" text-center">
        <h3 className="mt-5 mb-5">Why Cognito Powder</h3>

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
      </div>
    </section>
  );
};
export default Product3;
