import React from "react";

import logo from "../images/micro5.PNG";
import logo1 from "../images/micro6.PNG";

const Team1 = () => {
  return (
    <section className="container mt-4 mb-2">
      <h2 className="text-center mt-3 mb-4">Directors Profile</h2>
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <img
            src={logo}
            alt={Team1.PNG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md text-center">
          <img
            src={logo1}
            alt={Team1.PNG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Team1;
