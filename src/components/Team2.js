import React from "react";
import { useState } from "react";
import logo from "../images/micro6.PNG";
import logo1 from "../images/micro9.PNG";
import logo2 from "../images/micro7.PNG";
import logo3 from "../images/micro8.PNG";
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
          className="col-md-3 col-sm-12"
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

        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="col-md-3 col-sm-12"
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
              <h4>Racheal Amadasun</h4>
              <p>Technical and Regulatory Manager</p>
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
          className="col-md-3 col-sm-12"
        >
          <img
            src={logo2}
            alt={Team2.PNG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
          {isHovering && (
            <div className="text-center">
              <h4>Ojekunle Ojeyinka</h4>
              <p>Production Systems Manager</p>
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
          className="col-md-3 col-sm-12"
        >
          <img
            src={logo3}
            alt={Team2.PNG}
            className="col-md "
            height="350px"
            style={{ objectFit: "cover" }}
          />
          {isHovering && (
            <div className="text-center">
              <h4>Chimudinmma Chimuno Nkwunonwo</h4>
              <p>Quality Assurance Manager</p>
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
