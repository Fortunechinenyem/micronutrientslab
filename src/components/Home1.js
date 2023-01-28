import React from "react";

import logo from "../images/m3.PNG";

const Home1 = () => {
  return (
    <section className="container mt-2 mb-2">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <p>OUR FLAGSHIP PRODUCT</p>
          <h1>Cognito® Micronutrient Powder</h1>
          <p>
            Cognito® MNP is a specially-designed micronutrient powder containing
            ten (10) essential vitamins and five (5) minerals for high cognitive
            development and performance, physical growth and optimum health.
          </p>
          <h5>NAFDAC number: A8-4768</h5>
          <h5>PATENT number: NG/P/2013/621</h5>
        </div>

        <img
          src={logo}
          alt={Home1.png}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
export default Home1;
