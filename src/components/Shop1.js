import React from "react";
import Itemcard from "../components/productcart/Itemcard";
import Data1 from "../components/productcart/Data";
import logo from "../images/m3.PNG";

const Shop1 = () => {
  return (
    <>
      <section className="mt-5 mb-5">
        <div className="d-flex container row g-4">
          <div className="card col-md-4 col-sm-12">
            <img
              src={logo}
              alt={Shop1.PNG}
              className=""
              height="350px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className=" col-md ">
            {Data1.cognito.map((item, index) => {
              return (
                <Itemcard
                  title={item.title}
                  desc1={item.desc1}
                  desc2={item.desc2}
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
