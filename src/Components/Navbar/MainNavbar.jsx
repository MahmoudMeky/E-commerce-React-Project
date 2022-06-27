import React from "react";
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

import Cart from "./Cart";
import "./MainNavbar.css";



export default function MainNavbar() {




  return (
    <Navbar bg="" expand="lg" className=" px-1 px-sm-5  shadow-lg">
      <Container fluid className="gap-lg-3 px-3">
        <Navbar.Brand href="/home">
          <img
            src="/logo.png"
            className="d-inline-block align-top"
            alt="logo"
            width="110px"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="order-1 p-0 border-0"
        />

        <Navbar.Collapse id="navbarScroll" className="order-1 order-lg-0">
          <Nav className="me-auto my-2 my-lg-0">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            <NavDropdown title="Categories" id="navbarScrollingDropdown"  >




              <NavDropdown.Item className="p-0">
                <Link to="/categories/clothes" className="dropdown-item">clothes</Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="p-0" >
                <Link to="/categories/electronics" className="dropdown-item">electronics</Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="p-0">
                <Link to="/categories/furniture" className="dropdown-item">furniture</Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="p-0">
                <Link to="/categories/shoes" className="dropdown-item">shoes</Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="p-0">
                <Link to="/categories/others" className="dropdown-item">others</Link>
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
          <div className="search-container">
            {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form> */}
          </div>
          <img src="/icons/search.svg" width="25px" alt="" />
          <img src="/icons/user.svg" width="25px" alt="" />
          {/* <img src="/icons/heart.svg" width="25px" alt="" /> */}

          <Cart />
        </div>
      </Container>
    </Navbar>
  );
}
