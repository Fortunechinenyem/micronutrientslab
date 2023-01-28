import React from "react";
import { Link } from "react-router-dom";
const HomeHero = () => {
  return (
    <section className="homehero ">
      <div className="">
        <div className="herotext">
          <h1>MicroNutrients Laboratories </h1>
          <Link to="/platform" className="btn btn-light mt-4">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
