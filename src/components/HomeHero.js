import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const HomeHero = () => {
  return (
    <section className="homehero ">
      <div className="">
        <div className="herotext">
          <h5>Welcome to MicroNutrients Lab</h5>
          <h1> MANUFACTURER OF COGNITO </h1>
          <Link to="/about" className="btn btn-primary mt-4">
            Read More <BsArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
