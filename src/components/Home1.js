import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import logo from "../images/micro18.jpg";

const Home1 = () => {
  return (
    <section className="container mt-4 mb-2">
      <div>
        <div className="col-md text-center">
          <p>ABOUT COGNITO</p>
          <h2>WIN THE FIGHT AGAINST MALNUTRITION WITH COGNITO</h2>
          <div className="d-flex row g-5 mx-auto home1 mt-2">
            <div className="col-md">
              <img
                src={logo}
                alt={Home1.PNG}
                className="col-md py-5"
                height="500px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-md ">
              <p>
                UNICEF state that Nigeria has the second-highest burden of
                stunted children globally. Sadly, an estimated two millions
                children in Nigeria suffer from Severe Acute Malnutrition (SAM),
                but the country reached only two out of every ten children
                affected with treatment. Cognito® MNP is a well-formulated
                single-serve blend of 15 essential micronutrients (10 vitamins
                and five minerals). One sachet of Cognito is sufficient to
                provide 100% recommended nutrient intake (RNI) for infants and
                young children. This supplement is also recommended for adults.
                It is packed in affordable 1g sachets to ensure that you are
                getting exactly the amount you need without human error in
                measurement via under or over scooping. Cognito was formulated
                with the aim of treating Severe Acute Malnutrition and it has
                achieved this by impacting over 350,000 children. Micronutrient
                Laboratory delivers Cognito within 48-96 hours of request.
                Constant intake of Cognito has enabled children to regain
                mobility and other impairment lost due to malnutrition. It also
                boosts the immune system for healthy living. Approved and
                certified (MANCAP) by the Standard Organization of Nigeria,
                Cognito is affordable, effective and remains the best supplement
                for child growth. Dietary supplements such as Cognito MNP are
                intended to enhance the quantity of vitamins and minerals
                consumed through a regular diet not to replace it entirely.
              </p>
              <div className="text-center">
                <Link to="/about" className="btn btn-warning mt-4">
                  Read More <BsArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home1;
