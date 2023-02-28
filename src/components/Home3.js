import React from "react";

import logo from "../images/micro12.PNG";
import logo1 from "../images/mi (6).jpg";
import logo2 from "../images/micro13.PNG";

const Home3 = () => {
  return (
    <section className="container mt-2 mb-2">
      <div className=" ">
        <div className=" text-center">
          <h3 className="mt-5 mb-5">Markers of change</h3>
          <div className="d-flex container row g-4">
            <div className="card col-md-4 col-sm-12">
              <img
                src={logo}
                alt={Home3.jpg}
                className=""
                height="250px"
                style={{ objectFit: "cover" }}
              />
              <h5 className="mt-3 mb-3">Win with Policies</h5>
              <p>
                Government officials, health ministers, commissioners and
                policymakers.
              </p>
            </div>
            <div className="card col-md-4 col-sm-12">
              <img
                src={logo1}
                alt={Home3.jpg}
                className=" "
                height="250px"
                style={{ objectFit: "cover" }}
              />
              <h5 className="mt-3 mb-3">Strengthen Our Healthcare System</h5>
              <p>
                Nutritionists, Pharmacists, Parents Paediatriations, Healthcare
                professionals
              </p>
            </div>
            <div className="card col-md-4 col-sm-12">
              <img
                src={logo2}
                alt={Home3.jpg}
                className=" "
                height="250px"
                style={{ objectFit: "cover" }}
              />
              <h5 className="mt-3 mb-3">Build Our Future</h5>
              <p>
                International Organizations, Benefactors/Philanthropists,
                Charity Organizations, Non-Governmental Organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home3;
