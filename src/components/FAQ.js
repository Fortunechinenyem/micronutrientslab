import React from "react";

import { BsArrowUp } from "react-icons/bs";
import logo from "../images/micro26.PNG";

const FAQ = () => {
  return (
    <section className="container mt-4 mb-4">
      <div className="text-center mt-4 mb-4">
        <h3 className="mt-3 mb-5">Frequently Asked Questions</h3>
      </div>
      <div className="d-flex row g-4">
        <div className="col-md">
          <img
            src={logo}
            alt={FAQ.PNG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md  text-center">
          <div className="btn-group col-md mb-2">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuClickable"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              aria-expanded="false"
            >
              What is Cognito® Instant micronutrient powder ? <BsArrowUp />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickable"
            >
              <li>
                <p className="dropdown-item">
                  Cognito® Instant micronutrient powder (Cognito® Instant MNP)
                  is a single-serve blend of 15 essential micronutrients (10
                  vitamins and 5 minerals). When a 1-gram sachet of Cognito®
                  Instant MNP is added to the complementary foods of children 6
                  months to 59 months (6 months - 5 years of age), it helps to
                  improve the nutritive content of such foods and provides a
                  100% Recommended Nutrient Intake (RNI) for children within
                  that age group. Cognito® Instant MNP is added to any
                  semi-solid food and porridge at the point of consumption. It
                  is an easy and cheap form of food fortification (home
                  fortification) and does not affect the taste, colour or
                  texture of the food to which it is added. Older children and
                  adults can also benefit from the nutritive goodness contained
                  in Cognito® Instant MNP.
                </p>
              </li>
            </ul>
          </div>
          <div className="btn-group col-md mb-2">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuClickable"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              aria-expanded="false"
            >
              What Kind of food can I put Cognito® Instant micronutrient powder
              into? <BsArrowUp />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickable"
            >
              <li>
                <p className="dropdown-item">
                  Cognito® Instant micronutrient powder MNP can be added to any
                  semi-solid foods and porridges including pap, oats, cereals
                  and so on.
                </p>
              </li>
            </ul>
          </div>
          <div className="btn-group col-md mb-2 ">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuClickable"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              aria-expanded="false"
            >
              For how long should Cognito® Instant MNP be used? <BsArrowUp />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickable"
            >
              <li>
                <p className="dropdown-item">
                  The World Health Organisation (WHO) recommends that children
                  be breastfed exclusively for six (6) months after which
                  complementary feeding and Cognito® Instant MNP can be
                  introduced. One (1) sachet per day or every other day is
                  recommended i.e. a pack of 30 sachets is to be consumed
                  between 30 to 60 days.
                </p>
              </li>
            </ul>
          </div>
          <div className="btn-group col-md mb-2">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuClickable"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              aria-expanded="false"
            >
              I already give my children fruits and vegetables, why should I
              include Cognito® Instant micronutrient powder in their meals?{" "}
              <BsArrowUp />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickable"
            >
              <li>
                <p className="dropdown-item">
                  Yes, Fruits and vegetables are good sources of vitamins,
                  however, including Cognito® Instant MNP in meals ensures your
                  children do not miss out on daily recommended nutrient intake.
                </p>
              </li>
            </ul>
          </div>
          <div className="btn-group col-md mb-2 ">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuClickable"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              aria-expanded="false"
            >
              Why must Cognito® Instant micronutrient powder be added at
              atemperature conducive for eating and the food be eaten within 30
              minutes of addition? <BsArrowUp />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickable"
            >
              <li>
                <p className="dropdown-item">
                  Vitamins and minerals are unstable at high temperatures hence
                  exposure to Cognito® Instant MNP (already added to food) at
                  such temperature could result in discoloration of the food
                  which is not visually appealing. However, this does not affect
                  its nutritional value. This discolouration also applies to
                  leaving the food with Cognito® for more than 30 minutes.
                </p>
              </li>
            </ul>
          </div>
          <div className="btn-group col-md mb-2 ">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuClickable"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              aria-expanded="false"
            >
              Where can I get Cognito® Instant micronutrient Powder MNP?{" "}
              <BsArrowUp />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickable"
            >
              <li>
                <p className="dropdown-item">
                  Cognito® Instant MNP can be purchased from our online store,
                  supermarkets and shops near you. For bulk commercial
                  purchases, you can contact us via a call or email. Kindly view
                  our contact page for more details.
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
