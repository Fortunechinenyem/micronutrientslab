import React from "react";

import logo from "../images/mi (6).jpg";

const Blog2 = () => {
  return (
    <section className="container mt-4 mb-4">
      <div className="d-flex row g-5 mx-auto ">
        <img
          src={logo}
          alt={Blog2.jpg}
          className="col-md "
          height="250px"
          style={{ objectFit: "cover" }}
        />

        <div className="col-md text-center">
          <h2>
            {" "}
            Cognito Micronutrient Powder fortifies foods for infants to fight
            malnutrition
          </h2>
          <p>
            Micronutrient Laboratories Limited brought into the market on
            Wednesday 14 October 2020, its Cognito Micronutrient Powder to fight
            the threat of infant malnutrition in Nigeria. Cognito MNP has
            witnessed rapid growth on the back of acceptance by institutional
            buyers, notably the Federal Ministry of Health and other MDAs at
            federal and state government levels. Micronutrient Laboratories
            Limited stated that Cognito MNP
          </p>
        </div>
      </div>
    </section>
  );
};
export default Blog2;
