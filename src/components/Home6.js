import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";

const Home6 = () => {
  return (
    <section className="container mt-5 mb-2">
      <h3 className="text-center mt-4 mb-5">Our Latest News</h3>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active Home61 mt-3 herotext">
            <h4>
              SON grants MANCAP certification to Micronutrients Laboratories
            </h4>

            <p>February 26, 2023</p>

            <Link to="/distributor" className="btn btn-warning mt-4 mb-3">
              Read More <BsArrowRight />
            </Link>
          </div>
          <div className="carousel-item active Home62 mt-3 herotext">
            <h4>SON grants MANCA</h4>

            <p>February 26, 2023</p>

            <Link to="/distributor" className="btn btn-warning mt-4 mb-3">
              Read More <BsArrowRight />
            </Link>
          </div>

          <div className="carousel-item active Home63 mt-3 herotext">
            <h4>Cognito Powder fights MALNUTRITION</h4>

            <p>February 26, 2023</p>

            <Link to="/distributor" className="btn btn-warning mt-4 mb-3">
              Read More <BsArrowRight />
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="text-center mt-5 mb-4">
        <h3 className="text-center">Join Our Distributorship Community</h3>
      </div>
      <div className="text-center">
        <Link to="/distributor" className="btn btn-warning mt-4 mb-3">
          Become A distributor <CiDeliveryTruck />
        </Link>
      </div>
    </section>
  );
};
export default Home6;
