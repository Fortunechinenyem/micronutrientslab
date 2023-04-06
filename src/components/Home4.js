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
                Cognito® Instant Micronutrient Powder was produced as an
                intervention strategy in the fight against micronutrient
                deficiency, especially in children under five which is the most
                crucial stage of a child’s life. Malnutrition is a direct or
                underlying cause of 45 percent of all deaths of under-five
                children in Nigeria. Cognito® Instant MNP is designed to support
                and boost the immune system in the short, medium and long-term.
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
                To ensure national micronutirent and vitamin security,
                especially with the potential challenges of food shortages and
                malnutrition among children, we make deliveries nationwide with
                48 to 96 hours delivery timeline.
              </p>
            </div>
            <div>
              <AiFillSafetyCertificate className="mt-3 mb-3" />
              <h5>Certified</h5>
              <p>
                Cognito® Instant MNP is a bioavailable micronutrient solution
                designed and produced to meet both local and international
                standards. It is MANCAP certified by the Standards Organization
                of Nigeria (SON) and approved by the National Agency for Food
                and Drug Administration and Control (NAFDAC).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home4;
