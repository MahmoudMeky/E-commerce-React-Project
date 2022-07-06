import React from "react";
import { useContext } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";

import Modal from "../Helpers/SearchModal";

import Cart from "./Cart";
import "./MainNavbar.css";

import AuthenticationContext from "../../Store/AuthenticationContext";
import { useState } from "react";
import { useEffect } from "react";




export default function MainNavbar() {


  let { state: isLoggedIn, setState: setLoginState } = useContext(AuthenticationContext)

  function logOut() {
    setTimeout(() => {
      setLoginState(false);
      localStorage.removeItem("access_token")
    }, 300)
  }

  function showHanlder() {
    console.log("M")
  }


  return (
    <Navbar bg="" expand="lg" className=" px-1 px-sm-5  shadow-lg">
      <Container fluid className="gap-lg-3 px-3">


        <NavLink to="/home" className="py-1">
          <img
            src="/logo.png"
            className="d-inline-block align-top"
            alt="logo"
            width="110px"
          />
        </NavLink>


        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="order-1 p-0 border-0"
        />

        <Navbar.Collapse id="navbarScroll" className="order-1 order-lg-0">
          <Nav className="me-auto my-2 my-lg-0">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item className="p-0">
                <Link to="/categories/clothes" className="dropdown-item">
                  clothes
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="p-0">
                <Link to="/categories/electronics" className="dropdown-item">
                  electronics
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="p-0">
                <Link to="/categories/furniture" className="dropdown-item">
                  furniture
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="p-0">
                <Link to="/categories/shoes" className="dropdown-item">
                  shoes
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="p-0">
                <Link to="/categories/others" className="dropdown-item">
                  others
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="icons d-flex gap-2 gap-md-3 align-items-center">

          <Modal
            
            title="Search"
            body={
              <form className="d-flex flex-column gap-3 w-100" action="/search" method="get">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  name="query"
                />
                <button type="submit" className="btn-dark p-2" >Search</button>
              </form>
            }
            searchIcon={true}
            btnTitle="Close"
          />














          {
            !isLoggedIn &&
            <NavLink to="/user" className="nav-link p-0">

              <img src="/icons/user.svg" width="25px" alt="" title="Login" />

            </NavLink>
          }

          <Cart />

          {
            isLoggedIn &&
            <div className="logout" title="Logout" >
              <img src="/icons/logout.svg" width="25px" alt="" onClick={logOut} />
            </div>
          }

        </div>
      </Container>
    </Navbar>
  );
}
