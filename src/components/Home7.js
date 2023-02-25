import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUp } from "react-icons/bs";
import logo from "../images/micro2.PNG";

const Home7 = () => {
  return (
    <section className="container mt-4 mb-2">
      <div className="text-center mt-4 mb-4">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="d-flex row g-5 mx-auto ">
        <img
          src={logo}
          alt={Home7.PNG}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
        <div className="col-md text-center">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="how Can I improve my Child's Health?"
            />
            <label for="floatingInput">
              how Can I improve my Child's Health? <BsArrowUp />
            </label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Any Side effect for Cognito? "
            />
            <label for="floatingPassword">
              Any Side effect for Cognito? <BsArrowUp />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home7;
