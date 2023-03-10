import React from "react";

import logo from "../images/son.PNG";

const Blog1 = () => {
  return (
    <section className="container mt-2 mb-4">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h2>SON grants MANCAP Certification to Micro Nutrients Lab</h2>
          <p>
            Quality standards regulator, the Standards Organisation of Nigeria
            (SON), has granted the Mandatory Conformity Assessment Programme
            (MANCAP) certification to Cognito® Instant Micronutrient Powder
            (Cognito® MNP) produced by Micronutrient Laboratories Limited (MLL).
            SON MANCAP certification follows a thorough factory inspection and
            the laboratory analysis of product samples that prove conformity “to
            the requirements of NIS 1059:2019
          </p>
        </div>
        <img
          src={logo}
          alt={Blog1.PNG}
          className="col-md "
          height="250px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
export default Blog1;
