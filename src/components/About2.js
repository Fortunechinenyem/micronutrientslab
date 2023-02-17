import React from "react";
import logo from "../images/mi (7).jpg";
const About2 = () => {
  return (
    <section className="container mt-2 mb-2">
      <div>
        <h4 className="text-center mt-4 mb-3"> Our Collaboration with LASG</h4>
        <img
          src={logo}
          alt={About2.png}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
export default About2;
