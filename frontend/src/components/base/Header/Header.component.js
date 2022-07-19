import React from "react";
import {Nav, Navbar, Container, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link className="header-logo" to="/">
            <Image src="./logo.png" alt="logo" width="140" height="140"/>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">начало</Link>
              <Link to="/products">продукти</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
};

export default Header;
