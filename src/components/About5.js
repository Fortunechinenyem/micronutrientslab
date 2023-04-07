import React from "react";

import logo from "../images/micro12.PNG";
import logo1 from "../images/mi (6).jpg";
import logo2 from "../images/micro13.PNG";

const About5 = () => {
  return (
    <section className="container mt-4 mb-4">
      <div className=" mx-auto ">
        <div className="col-md text-center" id="#company">
          <h3 className="mt-4 mb-4">Our Approach</h3>
        </div>
        <div className="d-flex row col-md g-5">
          <div className="card col-md">
            {" "}
            <img
              src={logo}
              alt={About5.jpg}
              className="col-md mb-4 "
              height="350px"
              style={{ objectFit: "cover" }}
            />
            <h5>Choose a Package</h5>
            <p>
              Visit our online store to buy or contact us directly with your
              order.
            </p>
          </div>
          <div className="card col-md">
            {" "}
            <img
              src={logo1}
              alt={About5.jpg}
              className="col-md mb-4 "
              height="350px"
              style={{ objectFit: "cover" }}
            />
            <h5>Partner with Us</h5>
            <p>
              Join our distributorship network and let’s win the fight against
              malnutrition
            </p>
          </div>
          <div className="card col-md">
            {" "}
            <img
              src={logo2}
              alt={About5.jpg}
              className="col-md mb-4 "
              height="350px"
              style={{ objectFit: "cover" }}
            />
            <h5>Consult Us</h5>
            <p>
              We work with individuals and organizations to create custom made
              intervention strategies better suited for your product to deliver
              the desired outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About5;
