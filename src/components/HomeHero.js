import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const HomeHero = () => {
  return (
    <section className="homehero ">
      <div className="col-md">
        <div className="herotext">
          <h1>MICRONUTRIENT LABORATORIES LIMITED (MLL)</h1>
          <h5>
            Manufacturers of{" "}
            <span style={{ color: "#FDA50F" }}>
              COGNITO® INSTANT MICRONUTRIENT POWDER{" "}
            </span>
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
