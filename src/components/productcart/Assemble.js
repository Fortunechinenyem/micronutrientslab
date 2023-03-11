import React from "react";
import Itemcard from "./Itemcard";
import Data1 from "../productcart/Data";

const Assemble = () => {
  return (
    <>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {Data1.cognito.map((item, index) => {
            return (
              <Itemcard
                title={item.title}
                desc1={item.desc1}
                desc2={item.desc2}
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

export default Assemble;
