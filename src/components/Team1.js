import React from "react";
import { useState } from "react";
import logo from "../images/micro5.PNG";
import logo1 from "../images/micro6.PNG";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Team2 = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <section className="container mt-4 mb-2">
      <h2 className="text-center mt-3 mb-4">Executive Management Team</h2>
      <div className="d-flex row g-5 mx-auto ">
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="col-md-6 col-sm-12"
        >
          <img
            src={logo}
            alt={Team2.PNG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
          {isHovering && (
            <div className="text-center">
              <h4>Dr A K Acholonu</h4>
              <p>Founder/ Chief Innovation Officer</p>
              <div className="">
                <div className="social col-md">
                  <FaFacebook
                    size={20}
                    style={{ color: "#000000", marginRight: "2rem" }}
                  />
                  <FaLinkedin
                    size={20}
                    style={{ color: "#000000", marginRight: "2rem" }}
                  />

                  <FaTwitter
                    size={20}
                    style={{ color: "#000000", marginRight: "2rem" }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="col-md-6 col-sm-12"
        >
          <img
            src={logo1}
            alt={Team2.PNG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
          {isHovering && (
            <div className="text-center">
              <h4>Sheriff Tunde Balogun</h4>
              <p>Co-Founder</p>
              <div className="">
                <div className="social col-md">
                  <FaFacebook
                    size={20}
                    style={{ color: "#000000", marginRight: "2rem" }}
                  />
                  <FaLinkedin
                    size={20}
                    style={{ color: "#000000", marginRight: "2rem" }}
                  />

                  <FaTwitter
                    size={20}
                    style={{ color: "#000000", marginRight: "2rem" }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team2;
