import React from "react";

import logo from "../images/m (1).jpg";

const AboutHero = () => {
  return (
    <section className="container mt-2 mb-2">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center"></div>

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
