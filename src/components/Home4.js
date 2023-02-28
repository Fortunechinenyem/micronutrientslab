import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { BsPersonFill } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import logo from "../images/micro11.PNG";

const Home4 = () => {
  return (
    <section className="text-center mt-2 mb-2 mx-auto w-75">
      <div className=" ">
        <h3 className="mt-5 mb-5">Make Healthy Life With Nature Food</h3>
        <div className="d-flex container row g-3">
          <div className="col-md-4 col-sm-12 mt-3 mb-3">
            <div>
              <BsCheckCircleFill className="mt-3 mb-3 " />
              <h5>Nutrition Strategies</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div>
              <GoGraph className="mt-3 mb-3" />
              <h5>Support & Motivation</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 mt-3 mb-3">
            <img
              src={logo}
              alt={Home4.PNG}
              className="col-md"
              height="250px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <div>
              <BsPersonFill className="mt-3 mb-3" />
              <h5>Professional Expert</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div>
              <AiFillSafetyCertificate className="mt-3 mb-3" />
              <h5>Certified</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home4;
