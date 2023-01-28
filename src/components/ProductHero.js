import React from "react";
import { Link } from "react-router-dom";

const ProductHero = () => {
  return (
    <section className="producthero ">
      <div className="">
        <div className="herotext">
          <Link to="/product" className="btn btn-dark mt-4">
            Order
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ProductHero;
