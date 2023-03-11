import React from "react";
import SideBar from "./SideBar";

const About1 = () => {
  return (
    <section className="container mt-2 mb-2">
      <div className="d-flex row ">
        <div className="col-md-10">
          <p>
            Micronutrient Laboratories Ltd was founded by a world renowned
            expert with over 30 years industry experince in micronutrient
            formulation, design and prodution. Micronutrient Laboratories Ltd is
            an indigenous science and technology company positioned to design,
            produce and deliver Micronutrient powder and other active
            ingeridients for the Food, Pharmaceutical/Healthcare and other
            specialty ingredients industries.
          </p>
          <div className="">
            <h4>What Makes Us Special</h4>
            <div className="d-flex row">
              <div className="col-md">
                <ul>
                  <li>Product Competitive Advantage</li>
                  <li>Produced locally to world class standards</li>
                  <li>Readily available without importation challenges</li>
                </ul>
              </div>
              <div className=" col-md">
                <ul>
                  <li>Transparency and Integrity</li>
                  <li>Collaborative team work</li>
                  <li>Aligns with public health directives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md">
          <div className="">
            {" "}
            <SideBar className="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About1;
