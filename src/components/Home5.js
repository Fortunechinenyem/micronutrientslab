import React from "react";

import logo from "../images/m (6).jpg";

const Home5 = () => {
  return (
    <section className="mt-5 mb-2">
      <div className="text-center">
        <h4>Nutrition Tips</h4>
        <img
          src={logo}
          alt={Home5.jpg}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
export default Home5;
