import React from "react";

import logo from "../images/mi (4).jpg";

const About4 = () => {
  return (
    <section className="container mt-4 mb-4">
      <div className=" mx-auto ">
        <div className="col-md text-center" id="#company">
          <h3 className="mt-4 mb-4">Production Capacity</h3>
        </div>

        <img
          src={logo}
          alt={About4.jpg}
          className="col-md mb-4 "
          height="350px"
          style={{ objectFit: "cover" }}
        />

        <p>
          We have produced 31.5 million sachets (10,500cartons) of COGNITO MNP
          within the last 12 months. September 1, 2022 to December 16, 2022- 21
          million sachets Projection 2023- 108 million sachets (36,000 cartons)
        </p>
      </div>
    </section>
  );
};
export default About4;
