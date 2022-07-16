import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import mainLogo from "../asset/Logo1.png";
import { NavLink } from "react-router-dom";

export default function NavbarRouter() {
  return (
    <Navbar collapseOnSelect expand="lg sm" variant="light" className="bg-light border-bottom sticky-lg-top">
      <Container>
        <Navbar.Brand href="#" className="navbar-brand">
          <Image src={mainLogo} style={{ width: 150, height: 65 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-link navbar-nav">
            <NavLink to="/" className="nav-link nav-item">
              Home
            </NavLink>
            <NavLink to="/education" className="nav-link nav-item">
              Education
            </NavLink>
            <NavLink to="/contact" className="nav-link nav-item">
              Contact
            </NavLink>
            <NavLink to="/quiz" className="nav-link nav-item">
              Quiz
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
