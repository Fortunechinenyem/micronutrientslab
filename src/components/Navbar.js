import React from "react";
import styled from "styled-components";
import { NavLink as Link, useNavigate } from "react-router-dom";
import NavCartButton from "../components/productcart/NavCartButton";
import logo from "../images/micrologo.PNG";
import { BsCart, BsShop } from "react-icons/bs";

const Nav = styled("nav")`
  padding: 1.5rem 0;
  background-color: #ffff;
  positon: fixed;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1020;
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

      <li className="nav-item">
        <Link className="nav-link" to="/product" style={{ color: "#268f7d" }}>
          Product
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
          style={{ color: "#FDA50F" }}
        >
          About
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <Link to="/about" className="dropdown-item nav-link">
              Company
            </Link>
          </li>
          <li>
            <Link to="/team" className="dropdown-item nav-link">
              Our Team
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/blog" style={{ color: "#268f7d" }}>
          Blog
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
          style={{ color: "#FDA50F" }}
        >
          <BsShop />
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <Link to="/shop" className="dropdown-item nav-link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className="dropdown-item nav-link">
              Cart <BsCart />
            </Link>
          </li>
        </ul>
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
          <Link to="/product" className="btn btn-warning">
            Order
          </Link>
        </ButtonWrapper>
        <ButtonWrapper>
          <Link className="nav-link" to="/cart" style={{ color: "#268f7d" }}>
            <NavCartButton />
          </Link>
        </ButtonWrapper>
      </SearchNavWrapper>
    </Nav>
  );
};
export default Navbar;
