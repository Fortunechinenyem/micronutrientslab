import React from "react";

import logo from "../images/mi (3).jpg";

const TeamHero = () => {
  return (
    <section className="container mt-2 mb-4">
      <div className=" mx-auto ">
        <div className="col-md text-center" id="#company">
          <h1 className="text-center mt-2 mb-3">Meet Our Excellent Team</h1>
        </div>

        <img
          src={logo}
          alt={TeamHero.png}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
export default TeamHero;
