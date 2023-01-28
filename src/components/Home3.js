import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/m.jpg";

const Home3 = () => {
  return (
    <section className="container mt-2 mb-2">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h3 className="mt-5">Become a Cognito Distributor</h3>
          <img
            src={logo}
            alt={Home3.png}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
          <p>Join our community of far reaching distributor chain.</p>
          <Link to="/distributor" className="btn btn-dark mt-4">
            Become a Distributor
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home3;
