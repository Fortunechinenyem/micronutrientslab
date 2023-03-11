import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { BsPersonFill } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Home4 = () => {
  return (
    <section className="text-center mt-2 mb-2 mx-auto w-75">
      <div className=" ">
        <h3 className="mt-5 mb-5">
          Choose A Healthy Life with Micronutrients Laboratories
        </h3>
        <div className="d-flex container row g-3">
          <div className="col-md-6 col-sm-12 mt-3 mb-3">
            <div>
              <BsCheckCircleFill className="mt-3 mb-3 " />
              <h5>FIGHT MALNUTRITION</h5>
              <p>
                We made Cognito Powder, which is our most popular product, to
                help fight malnutrition, which affects more than 2 million
                children.
              </p>
            </div>
            <div>
              <GoGraph className="mt-3 mb-3" />
              <h5>SUPPORT HEALTHY LIVING</h5>
              <p>
                Through our partnerships with NGOs, healthcare professionals and
                institutions, we continue to provide necessary support for
                families all over Nigeria.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div>
              <BsPersonFill className="mt-3 mb-3" />
              <h5>NATIONWIDE DELIVERY</h5>
              <p>
                We make it simple and easy to get the right micronutrients with
                our quick nationwide delivery of all our products.
              </p>
            </div>
            <div>
              <AiFillSafetyCertificate className="mt-3 mb-3" />
              <h5>Certified</h5>
              <p>
                Our products are produced under standard clinical conditions
                with approval and certification by the Standard Organizations of
                Nigeria (SON) and National Food and Drug Agency (NAFDAC).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home4;
