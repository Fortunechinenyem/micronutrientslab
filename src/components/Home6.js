import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Home6 = () => {
  return (
    <section className="mt-5 mb-2">
      <div className="text-center">
        <h4>Our Blog</h4>
        <p>The Choice Is Yours To Make You Healthy</p>
        <Link to="/blog" className="btn btn-primary mt-4">
          Read More <BsArrowRight />
        </Link>
      </div>
    </section>
  );
};
export default Home6;
