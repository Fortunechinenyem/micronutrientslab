import React from "react";

import logo from "../images/micro18.jpg";

const Home1 = () => {
  return (
    <section className="container mt-4 mb-2">
      <div>
        <div className="col-md text-center">
          <h2>WIN THE FIGHT AGAINST MALNUTRITION WITH COGNITO® MNP </h2>
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
                Cognito® Instant MNP, Micronutrient Laboratories Limited's (MLL)
                flagship product has impacted over 350,000 children across
                Nigeria. This unique formulation is produced with the highest
                Food Safety Standards and it is NAFDAC (A8-4768) approved and
                MANCAP (FT-12799)-certified by the Standards Organization of
                Nigeria (SON). Cognito® Instant MNP is a special blend of 15
                essential micronutrients (10 vitamins and 5 minerals) in a
                1-gram serving size. One sachet of Cognito® Instant MNP provides
                100% of the Recommended Nutrient Intake (RNI) for a child
                between the age of 6 months to 59 months (6 months – 5 years).
                Other family members can also enjoy the nutritious goodness
                contained in Cognito® Instant MNP. Dietary food supplements such
                as Cognito® Instant MNP are intended to enhance the nutritional
                content of most Nigerian staples that lack the necessary
                vitamins and minerals needed for the overall well-being, growth
                and development of the body. In line with our commitment to
                reduce micronutrient deficiency and also maintain the
                nutritional status of the populace, MLL ensures rapid supply and
                delivery of Cognito® Instant MNP across Nigeria and Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home1;
