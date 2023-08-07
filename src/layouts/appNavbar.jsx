import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


const AppNavbar = ({ scrollToSection }) => {
  return (
    <>
      <Navbar expand="lg" className="navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="logo-text">
            THM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
