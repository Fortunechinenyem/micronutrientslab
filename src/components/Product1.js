import React from "react";

import logo from "../images/micro27.PNG";
import logo1 from "../images/micro20.jpg";
import logo2 from "../images/micro28.PNG";

const Product1 = () => {
  return (
    <section className="container mt-2 mb-2">
      <div className=" text-center">
        <h3 className="mt-5 mb-5">Why Cognito Powder</h3>
        <div className="d-flex container row g-4">
          <div className="card col-md-4 col-sm-12">
            <img
              src={logo}
              alt={Product1.PNG}
              className=""
              height="350px"
              style={{ objectFit: "cover" }}
            />
            <h5 className="mt-3 mb-3">Improves Quality of Life</h5>
            <p>
              Contains vitamin B that helps to stimulate a child's appetite,
              restore body health, and support their growth.
            </p>
          </div>
          <div className="card col-md-4 col-sm-12">
            <img
              src={logo1}
              alt={Product1.PNG}
              className=" "
              height="350px"
              style={{ objectFit: "cover" }}
            />
            <h5 className="mt-3 mb-3">Bolsters Child's Immune System</h5>
            <p>
              With 30mg of vitamin C in each sachet, Cognito Powder boosts the
              immune system for a longer and healthier life
            </p>
          </div>
          <div className="card col-md-4 col-sm-12">
            <img
              src={logo2}
              alt={Product1.PNG}
              className=" "
              height="350px"
              style={{ objectFit: "cover" }}
            />
            <h5 className="mt-3 mb-3">
              Vitamins That Improves Cognitive Growth
            </h5>
            <p>
              It has vitamin B in it, which helps a child's appetite, improves
              their health, and helps them grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product1;
