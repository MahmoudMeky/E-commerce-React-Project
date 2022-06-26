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

import Cart from "./Cart";
import "./MainNavbar.css";

export default function MainNavbar() {
  return (
    <Navbar bg="" expand="lg" className="w-100">
      <Container fluid className="gap-lg-3 px-sm-5">
        <Navbar.Brand href="#">
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
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
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
