import React from "react";

import { Link } from "react-router-dom";

const Home2 = () => {
  return (
    <section className=" mt-5 mb-5">
      <div className=" mx-auto ">
        <div className="col-md text-center">
          <h4>Benefits</h4>
          <p>
            {" "}
            Every child deserves a healthy diet filled with the goodness of
            essential micronutrients. Therefore, protecting vulnerable
            malnourished children should be non-negotiable. Cognito®
            Micronutrient Powder (Cognito® MNP) offers a cost-effective means
            for realizing this vital child survival goal. It is the product of
            first-rate science and micronutrient specialists deploying current
            knowledge and technology. The unique formulation produced with the
            highest food safety standards offers the following nutritional
            benefits;
          </p>
          <Link to="/product" className="btn btn-primary mt-4">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home2;
