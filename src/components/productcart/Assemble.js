import React from "react";
import Itemcard from "./Itemcard";
import Data1 from "./Data";

const Assemble = () => {
  return (
    <>
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

export default Assemble;
