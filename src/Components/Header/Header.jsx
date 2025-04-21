import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = ({  }) => {


  return (
    <Navbar expand="lg" className="sticky-top header-bg">
        <Container>
            <Navbar.Brand href="/">Jared Karbakhsh</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default Header;