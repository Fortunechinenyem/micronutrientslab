import React from "react";
import logo from "../images/cognito.PNG";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";

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
    <>
      <section>
        <footer className="footer">
          <Logo className="mb-5" />

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
              Contact
            </Link>
          </div>
          <div>
            <a
              href="mailto:fortunechinenyem@gmail.com"
              className="footer__link"
            >
              info@micronutrientslab.com
            </a>
            <ul className="social-list">
              <li className="social-list__item">
                <a
                  className="social-list__link"
                  href="https://www.linkedin.com"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="social-list__item">
                <a className="social-list__link" href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>

              <li className="social-list__item">
                <a
                  className="social-list__link"
                  href="https://www.facebook.com"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="social-list__item">
                <a
                  className="social-list__link"
                  href="https://www.whatsapp.com"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <p>
            Address: Plot C39A, Amuwo Odofin Commerical Scheme, Along Alakoso
            Avenue, Amuwo Odofin, Lagos, Nigeria
          </p>
          <p className="mt-5 mb-1">
            {" "}
            ​Copyright © 2023, Fortune.dev. All Rights Reserved.
          </p>
        </footer>
      </section>
    </>
  );
};
export default Footer;
