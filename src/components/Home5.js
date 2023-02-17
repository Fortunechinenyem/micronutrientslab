import React from "react";
import logo from "../images/t1.PNG";
import logo1 from "../images/t2.PNG";
import logo2 from "../images/t3.PNG";

const Home5 = () => {
  return (
    <section className="mt-5 mb-2">
      <div className="text-center">
        <div
          id="carouselExampleIndicators"
          className="carousel slide home5 text-center "
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-50" src={logo} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-50" src={logo1} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-50" src={logo2} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home5;
