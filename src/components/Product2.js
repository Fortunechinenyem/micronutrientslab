import React from "react";
import logo from "../images/mic (5).jpg";
import logo1 from "../images/mic (8).jpg";
import logo2 from "../images/mic (7).jpg";
import logo3 from "../images/mic (10).jpg";

const Product2 = () => {
  return (
    <section>
      <div>
        <h2 className="text-center mt-3 mb-4">Use Cases</h2>
        <div className="d-flex row g-5 mx-auto ">
          <div className="col-md text-center">
            <img
              src={logo}
              alt={Product2.PNG}
              className="col-md "
              height="250px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md text-center">
            <img
              src={logo1}
              alt={Product2.PNG}
              className="col-md "
              height="250px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md text-center">
            <img
              src={logo2}
              alt={Product2.PNG}
              className="col-md "
              height="250px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md text-center">
            <img
              src={logo3}
              alt={Product2.PNG}
              className="col-md "
              height="250px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product2;
