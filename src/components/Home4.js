import React from "react";

import logo from "../images/m4.PNG";

const Home4 = () => {
  return (
    <section className="text-center mt-2 mb-2 mx-auto w-75">
      <div className=" ">
        <h3 className="mt-5">Testimonials</h3>
        <img
          src={logo}
          alt={Home4.PNG}
          className=""
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
export default Home4;
