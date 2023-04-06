import React from "react";
import { Link } from "react-router-dom";

const ProductHero = () => {
  return (
    <section className="producthero ">
      <div className="">
        <div className="herotext">
          <h1>Cognito® MNP </h1>
          <h5>
            Cognito® Instant MNP is specially designed, to deliver 15 essential
            bioavailable vitamins and minerals. This single-serve blend in a
            1gram sachet is produced with the highest food safety standards to
            offer the following benefits
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
