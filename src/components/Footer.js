import React from "react";

const Footer = () => {
  return (
    <>
      <section>
        <footer className="footer">
          <div>
            <p>
              Address: Plot C39A, Amuwo Odofin Commerical Scheme, Along Alakoso
              Avenue, Amuwo Odofin, Lagos, Nigeria
            </p>
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
          <p className="mt-5 mb-1">
            {" "}
            ​Copyright © 2023, MicroNutrients Lab. All Rights Reserved.
          </p>
        </footer>
      </section>
    </>
  );
};
export default Footer;
