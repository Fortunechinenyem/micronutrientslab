import React from "react";
import logo from "../images/micrologo.PNG";
import styled from "styled-components";
import "./FooterStyles.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
const LogoWrapper = styled("div")`
  margin-right: 5rem;
`;
const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoWrapper className="logo" onClick={() => navigate("/")}>
      <img src={logo} alt={logo.svg} />
    </LogoWrapper>
  );
};
const Footer = () => {
  return (
    <section className="footer">
      <Logo className="mb-5" />
      <div className="container">
        <div className="d-flex  row ">
          <div className="left col-md">
            <h3>Contact Us</h3>
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +234(802) 4430 439 +234(802) 4430 439
            </h4>
            <h4 className="email">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              mudassar@gmail.com
            </h4>

            <div className="location">
              <GoLocation
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Plot C39A, Amuwo Odofin Commerical Scheme, Along Alakoso Avenue,
              Amuwo Odofin, Lagos, Nigeria
            </div>
          </div>
          <div className="center col-md">
            <h3>Our Services</h3>
            <div>
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About Us
              </Link>
              <Link className="nav-link" to="/product">
                Our Product
              </Link>
              <Link className="nav-link" to="/about">
                Blog
              </Link>
              <Link className="nav-link" to="/about">
                Get Cognito
              </Link>
            </div>

            <div className="right ">
              <div className="social col-md">
                <FaFacebook
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                <FaLinkedin
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />

                <FaTwitter
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 mb-1">
        ​Copyright © 2023, Fortune.dev. All Rights Reserved by{" "}
        <span className="herotext1">MICRONUTRIENT LAB</span>
      </p>
    </section>
  );
};
export default Footer;
