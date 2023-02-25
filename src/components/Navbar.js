import React from "react";
import styled from "styled-components";
import { NavLink as Link, useNavigate } from "react-router-dom";

import logo from "../images/micrologo.PNG";

const Nav = styled("nav")`
  padding: 1.5rem 0;
  background-color: #ffff;
`;
const LinksWrapper = styled("ul")`
  background-color: #fff;
  padding: 0 5rem;
`;
const SearchNavWrapper = styled("div")``;
const ButtonWrapper = styled("div")` display: flex;justify-content: flex-end;
 @media screen and (max-width: 1024px) { justify-content: flex-start; margin-top: 0.5rem;  }`;

const LogoWrapper = styled("div")`
  margin-right: 5rem;
`;
const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoWrapper className="logo" onClick={() => navigate("/")}>
      <img src={logo} alt={logo.PNG} />
    </LogoWrapper>
  );
};
const NavbarToggler = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

const NavLinks = () => {
  return (
    <LinksWrapper className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="/about"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          About
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <Link to="/about" className="dropdown-item nav-link" href="#">
              Company
            </Link>
          </li>
          <li>
            <Link to="/about" className="dropdown-item nav-link" href="#">
              Our Team
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/product" style={{ color: "#268f7d" }}>
          Product
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/blog" style={{ color: "#268f7d" }}>
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact" style={{ color: "#268f7d" }}>
          Contact Us
        </Link>
      </li>
    </LinksWrapper>
  );
};

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg px-3">
      <Logo />
      <NavbarToggler />
      <SearchNavWrapper
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <NavLinks />
        <ButtonWrapper>
          <a href="https://wa.link/o688gi" className="btn btn-warning">
            Order
          </a>
        </ButtonWrapper>
      </SearchNavWrapper>
    </Nav>
  );
};
export default Navbar;
