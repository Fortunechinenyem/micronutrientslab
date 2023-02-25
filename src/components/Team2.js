import React from "react";

import logo from "../images/micro6.PNG";
import logo1 from "../images/micro7.PNG";
import logo2 from "../images/micro8.PNG";
import logo3 from "../images/micro9.PNG";

const Team2 = () => {
  return (
    <section className="container mt-4 mb-2">
      <h2 className="text-center mt-3 mb-4">Executive Management Team</h2>
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <img
            src={logo}
            alt={Team2.PNG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md text-center">
          <img
            src={logo1}
            alt={Team2.PNG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md text-center">
          <img
            src={logo2}
            alt={Team2.PNG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md text-center">
          <img
            src={logo3}
            alt={Team2.PNG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Team2;
