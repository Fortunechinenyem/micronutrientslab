import React from "react";
import Itemcard from "../components/productcart/Itemcard";
import Data1 from "../components/productcart/Data";
import logo from "../images/micro31.PNG";

const Product3 = () => {
  return (
    <section className="container mt-2 mb-2">
      <div className=" ">
        <div className=" text-center">
          <h3 className="mt-5 mb-5">Why Cognito Powder</h3>
          <div className="d-flex container row g-4">
            <div className="card col-md-4 col-sm-12">
              <img
                src={logo}
                alt={Product3.PNG}
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
        </div>
      </div>
    </section>
  );
};
export default Product3;
