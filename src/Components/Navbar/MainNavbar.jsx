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
    <Navbar bg="" expand="lg" className="w-100 px-5  shadow-lg" >
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
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/categories/clothes">clothes</NavDropdown.Item>
              <NavDropdown.Item href="/categories/electronics">electronics</NavDropdown.Item>
              <NavDropdown.Item href="/categories/furniture">furniture</NavDropdown.Item>
              <NavDropdown.Item href="/categories/shoes">shoes</NavDropdown.Item>
              <NavDropdown.Item href="/categories/others">others</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
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
