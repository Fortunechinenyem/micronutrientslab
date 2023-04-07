import React from "react";
import Itemcard from "../components/productcart/Itemcard";
import Data1 from "../components/productcart/Data";

const Shop1 = () => {
  return (
    <>
      <section className="mt-5 mb-5">
        <div className=" container  g-4">
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
    </>
  );
};
export default Shop1;
