import React from "react";
import styled from "styled-components";

import NavCartButton from "../components/productcart/NavCartButton";

import { NavLink as Link, useNavigate } from "react-router-dom";

import logo from "../images/cognito.PNG";

const Nav = styled("nav")`
  padding: 1.5rem 0;
  background-color: #272775;
`;
const LinksWrapper = styled("ul")`
  background-color: #fff;
  padding: 0 5rem;
`;
const SearchNavWrapper = styled("div")``;
// const ButtonWrapper = styled("div")` display: flex;justify-content: flex-end;
//  @media screen and (max-width: 1024px) { justify-content: flex-start; margin-top: 0.5rem;  }`;
const SearchForm = styled("form")`
  margin-right: 5rem;
`;
const SearchInput = styled("input")`
  border-radius: 0px;
  outline: none;
  border: none;
`;
// const Button = styled("button")`
//   padding: 0.3rem 1.3rem;
//   border: none;
// `;
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
const SearchBar = () => {
  return (
    <SearchForm className="form-inline my-2 my-lg-0">
      <SearchInput
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </SearchForm>
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

      <li className="nav-item ">
        <Link className="nav-link" to="/about">
          About Us
        </Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/product">
          Our Product
        </Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/distributor">
          Blog
        </Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/contact">
          Contact Us
        </Link>
      </li>
      <li>
        <Link className="" to="/cart">
          <NavCartButton />
        </Link>
      </li>
    </LinksWrapper>
  );
};

const NavBar = () => {
  return (
    <Nav className="navbar navbar-expand-lg px-3">
      <Logo />
      <NavbarToggler />
      <SearchNavWrapper
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <SearchBar />
        <NavLinks />
      </SearchNavWrapper>
    </Nav>
  );
};
export default NavBar;
