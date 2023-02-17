import React from "react";

import logo from "../images/m (6).jpg";

import logo1 from "../images/mic (5).jpg";
import logo2 from "../images/mic (7).jpg";
import logo3 from "../images/mic (10).jpg";
import logo4 from "../images/mic (9).jpg";
import logo5 from "../images/mic (8).jpg";

const Home4 = () => {
  return (
    <section className="text-center mt-2 mb-2 mx-auto w-75">
      <div className=" ">
        <h3 className="mt-5">Foods that Cognito can be used in</h3>
        <div className="d-flex container row g-3">
          <img
            src={logo}
            alt={Home4.jpg}
            className="col-md"
            height="350px"
            style={{ objectFit: "cover" }}
          />
          <img
            src={logo1}
            alt={Home4.jpg}
            className="col-md"
            height="350px"
            style={{ objectFit: "cover" }}
          />
          <img
            src={logo2}
            alt={Home4.jpg}
            className="col-md"
            height="350px"
            style={{ objectFit: "cover" }}
          />
          <img
            src={logo3}
            alt={Home4.jpg}
            className="col-md"
            height="350px"
            style={{ objectFit: "cover" }}
          />
          <img
            src={logo4}
            alt={Home4.jpg}
            className="col-md"
            height="350px"
            style={{ objectFit: "cover" }}
          />
          <img
            src={logo5}
            alt={Home4.jpg}
            className="col-md"
            height="350px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};
export default Home4;
