import React from "react";

import logo from "../images/mic (1).jpg";
import logo1 from "../images/mic (2).jpg";
import logo2 from "../images/mic (3).jpg";

const Home3 = () => {
  return (
    <section className="container mt-2 mb-2">
      <div className=" ">
        <div className=" text-center">
          <h3 className="mt-5 mb-3">People that can use Cognito</h3>
          <div className="d-flex container row g-3">
            <img
              src={logo}
              alt={Home3.jpg}
              className="col-md "
              height="350px"
              style={{ objectFit: "cover" }}
            />
            <img
              src={logo1}
              alt={Home3.jpg}
              className="col-md "
              height="350px"
              style={{ objectFit: "cover" }}
            />
            <img
              src={logo2}
              alt={Home3.jpg}
              className="col-md "
              height="350px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home3;
