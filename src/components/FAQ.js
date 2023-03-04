import React from "react";

import { BsArrowUp } from "react-icons/bs";
import logo from "../images/micro17.jpg";

const FAQ = () => {
  return (
    <section className="container mt-4 mb-4">
      <div className="text-center mt-4 mb-4">
        <h3 className="mt-3 mb-5">Frequently Asked Questions</h3>
      </div>
      <div className="d-flex row ">
        <div className="col-md">
          <img
            src={logo}
            alt={FAQ.PNG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md m-4 text-center">
          <div className="btn-group col-md m-2">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuClickable"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              aria-expanded="false"
            >
              Who needs Cognito? <BsArrowUp />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickable"
            >
              <li>
                <p className="dropdown-item">
                  Children, Parents, Grandparents. Everyone who needs to improve
                  their lifestyle and the quality of their health needs Cognito.
                </p>
              </li>
            </ul>
          </div>
          <div className="btn-group col-md m-2">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuClickable"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              aria-expanded="false"
            >
              How to Order? <BsArrowUp />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickable"
            >
              <li>
                <p className="dropdown-item">
                  You can order through the website for orders under 50 pieces,
                  For orders above 50 pieces, please contact us through the
                  following numbers.
                </p>
              </li>
            </ul>
          </div>
          <div className="btn-group col-md m-2 ">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuClickable"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              aria-expanded="false"
            >
              At what age should Children take vitamins? <BsArrowUp />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickable"
            >
              <li>
                <p className="dropdown-item">
                  Children aged 6 months - 4 years can take nutrient
                  supplements.
                </p>
              </li>
            </ul>
          </div>
          <div className="btn-group col-md m-2">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuClickable"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              aria-expanded="false"
            >
              What vitamins are good for children? <BsArrowUp />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickable"
            >
              <li>
                <p className="dropdown-item">
                  Vitamin D, Zinc, and the essential micronutrients contained in
                  Cognito MNP are excellent for Children development especially
                  in underweight children and those with developmental issues.
                  Can I replace cooked food with Cognito?
                </p>
              </li>
            </ul>
          </div>
          <div className="btn-group col-md m-2">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuClickable"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              aria-expanded="false"
            >
              Can I replace cooked food with cognito? <BsArrowUp />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickable"
            >
              <li>
                <p className="dropdown-item">
                  Cognito MNP is intended to enhance the quantity obtained from
                  cooked meals. It’s advisable to combine this supplement with
                  semi solid meals for improved effectiveness
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
