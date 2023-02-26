import React from "react";

import logo from "../images/m3.PNG";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Blog3 = () => {
  return (
    <section className="container mt-2 mb-4">
      <h2 className="mt-5 mb-5 text-center">
        The Choice is Yours To Make You Healthy
      </h2>
      <div className="d-flex row g-5 mx-auto ">
        <img
          src={logo}
          alt={Blog3.jpg}
          className="col-md "
          height="250px"
          style={{ objectFit: "cover" }}
        />

        <div className="col-md text-center">
          <h1>Splash-Proof Micro Four Thirds</h1>
          <h4>$150</h4>
          <Link to="/product" className="btn btn-warning mt-4">
            Order Now
          </Link>
        </div>
      </div>

      <div className="text-center mt-5 mb-4">
        <h3 className="text-center">Join Our Distributorship Community</h3>
      </div>
      <div className="text-center">
        <Link to="/distributor" className="btn btn-warning mt-4 mb-3">
          Become A distributor <BsArrowRight />
        </Link>
      </div>
    </section>
  );
};
export default Blog3;
