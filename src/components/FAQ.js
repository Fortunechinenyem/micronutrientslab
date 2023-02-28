import React from "react";

import { BsArrowUp } from "react-icons/bs";
import logo from "../images/micro2.PNG";

const FAQ = () => {
  return (
    <section className="container mt-4 mb-4">
      <div className="text-center mt-4 mb-4">
        <h3 className="mt-3 mb-5">Frequently Asked Questions</h3>
      </div>
      <div className="d-flex row g-5 mx-auto ">
        <img
          src={logo}
          alt={FAQ.PNG}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
        <div className="col-md text-center">
          <div class="form-floating mb-3 ">
            <input
              type="email"
              class="form-control bg-warning"
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
              class="form-control bg-primary"
              id="floatingPassword"
              placeholder="Any Side effect for Cognito? "
            />
            <label for="floatingPassword">
              Any Side effect for Cognito? <BsArrowUp />
            </label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control bg-primary"
              id="floatingPassword"
              placeholder="Any Side effect for Cognito? "
            />
            <label for="floatingPassword">
              Can babies use cognito? <BsArrowUp />
            </label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control bg-primary"
              id="floatingPassword"
              placeholder="Any Side effect for Cognito? "
            />
            <label for="floatingPassword">
              Can it be put in a food while cooking? <BsArrowUp />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
