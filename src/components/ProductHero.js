import React from "react";
import { Link } from "react-router-dom";

const ProductHero = () => {
  return (
    <section className="producthero ">
      <div className="">
        <div className="herotext">
          <h1>COGNITO MNP</h1>
          <h5>
            Cognito® MNP is a well-formulated, single-serve blend of 15
            essential micronutrients.
          </h5>
          <Link to="/product" className="btn btn-warning mt-4">
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ProductHero;
