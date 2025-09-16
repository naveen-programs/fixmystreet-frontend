import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">   {/* ✅ Fixed */}
      <Container>
        <Navbar.Brand as={Link} to="/">FixMyStreet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/report">Report</Nav.Link>
            <Nav.Link as={Link} to="/potholes">View Potholes</Nav.Link> {/* ✅ renamed */}
            <Nav.Link as={Link} to="/map">Map</Nav.Link>
            <Nav.Link as={Link} to="/impact">Impact</Nav.Link>           {/* ✅ aligned with your route */}
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                {/* ✅ clearer than Admin */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
