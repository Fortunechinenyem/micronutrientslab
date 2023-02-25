import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import logo from "../images/micro1.PNG";

const Home1 = () => {
  return (
    <section className="container mt-4 mb-2">
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
            six months to 59 months.
          </p>
        </div>

        <img
          src={logo}
          alt={Home1.PNG}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="text-center">
        <Link to="/about" className="btn btn-warning mt-4">
          Read More <BsArrowRight />
        </Link>
      </div>
    </section>
  );
};
export default Home1;
