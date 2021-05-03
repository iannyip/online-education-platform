import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function MainNav({ showLoginModal }) {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand className="lead" href="#">
          <b> 💡 B R I L L I A N</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
          <Nav className="ms-auto">
            <Nav.Link href="#login" className="mx-4 fw-light">
              H O M E
            </Nav.Link>
            <Nav.Link
              href="#login"
              className="mx-4 fw-light"
              onClick={() => showLoginModal()}
            >
              L O G I N
            </Nav.Link>
            {/* <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
