import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const HomeHero = () => {
  return (
    <section className="homehero ">
      <div className="col-md">
        <div className="herotext">
          <h1>Welcome to MicroNutrients Lab</h1>
          <h5>
            Manufacturer and Distributor of{" "}
            <span style={{ color: "#FDA50F" }}>COGNITO PRODUCTS</span>
          </h5>
          <Link to="/about" className="btn btn-warning mt-4">
            Read More <BsArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
