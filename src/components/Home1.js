import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import logo from "../images/m3.PNG";

const Home1 = () => {
  return (
    <section className="container mt-2 mb-2">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <p>ABOUT COGNITO</p>
          <h2>WIN THE FIGHT AGAINST MALNUTRITION WITH COGNITO</h2>
          <p>
            Cognito® MNP is a well-formulated single-serve blend of 15 essential
            micronutrients (10 vitamins and five minerals). It is a free-flowing
            powder that is conveniently packed in 1gram affordable sachets to
            improve the nutritional content of most staple foods. Users add
            Cognito® MNP to semi-solid foods and porridges at the point of
            eating and at a temperature conducive to feeding the child. A sachet
            of Cognito® MNP is sufficient to provide 100% recommended nutrient
            intake (RNI) for infants and young children within the age range of
            six months to 59 months. Research has shown that most complementary
            staples for children six months to 59 months (6 months to 5 years)
            have little nutritional value and do not provide adequate
            micronutrients to meet their daily recommended intake. Cognito® MNP
            is added to complementary food for children after the first six
            months of exclusive breastfeeding. The addition of vitamins and
            minerals to enrich the nutrient content of food is one of the
            intervention strategies adopted by the Federal government to tackle
            malnutrition. UNICEF states that Nigeria has the second-highest
            burden of stunted children globally, with a national prevalence rate
            of 32 per cent of children under five. An estimated two million
            children in Nigeria suffer from severe acute malnutrition (SAM), but
            the country reaches only two out of every ten children affected with
            treatment.
          </p>
          <Link to="/about" className="btn btn-primary mt-4">
            Read More <BsArrowRight />
          </Link>
        </div>

        <img
          src={logo}
          alt={Home1.png}
          className="col-md w-50 mb-4 "
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
export default Home1;
