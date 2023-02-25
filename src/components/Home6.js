import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import logo1 from "../images/mi (6).jpg";
import logo from "../images/son.PNG";

const Home6 = () => {
  return (
    <section className="container mt-5 mb-2">
      <h3 className="text-center mt-4 mb-4">Our Latest News</h3>
      <div className="d-flex row g-5 mx-auto ">
        <img
          src={logo}
          alt={Home6.PNG}
          className="col-md "
          height="250px"
          style={{ objectFit: "cover" }}
        />
        <div className="col-md text-center">
          <p>
            SON grants MANCAP certification to Micronutrient Laboratories
            Quality standards regulator, the Standards Organisation of Nigeria
            (SON), has granted the Mandatory Conformity Assessment Programme
            (MANCAP) certification to Cognito® Instant Micronutrient Powder
            (Cognito® MNP) produced by Micronutrient Laboratories Limited (MLL).
            SON MANCAP certification follows a thorough factory inspection and
            the laboratory analysis of product samples that prove conformity “to
            the requirements of NIS 1059:2019
          </p>

          <Link to="/about" className="btn btn-warning mt-4 mb-3">
            Read More <BsArrowRight />
          </Link>
        </div>
      </div>
      <div className="d-flex row g-5 mx-auto ">
        <img
          src={logo1}
          alt={Home6.PNG}
          className="col-md "
          height="250px"
          style={{ objectFit: "cover" }}
        />

        <div className="col-md text-center">
          <p>
            Cognito Micronutrient Powder fortifies foods for infants to fight
            malnutrition Micronutrient Laboratories Limited brought into the
            market on Wednesday 14 October 2020, its Cognito Micronutrient
            Powder to fight the threat of infant malnutrition in Nigeria.
            Cognito MNP has witnessed rapid growth on the back of acceptance by
            institutional buyers, notably the Federal Ministry of Health and
            other MDAs at federal and state government levels. Micronutrient
            Laboratories Limited stated that Cognito MNP
          </p>
          <Link to="/about" className="btn btn-warning mt-4 mb-3">
            Read More <BsArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home6;
