import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const AppNavbar = ({ scrollToSection }) => {
  return (
    <>
      <Navbar className="navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Happy Marketing</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection("ourApproachSection")}>
              Our Approach
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("ourServicesSection")}>
              Services
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("aboutUsSection")}>
              About Us
            </Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
