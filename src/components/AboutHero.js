import React from "react";

import logo from "../images/micro3.jpg";

const AboutHero = () => {
  return (
    <section className="container mt-2 mb-4">
      <div className=" mx-auto ">
        <div className="col-md text-center" id="#company">
          <h1>About Us</h1>
        </div>

        <img
          src={logo}
          alt={AboutHero.png}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
export default AboutHero;
