import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Notariat 2.0</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={"/"}>Home</Nav.Link>
              <Nav.Link href={"/annuaire"}>Annuaire</Nav.Link>
              <NavDropdown title="Notaire" id="basic-nav-dropdown">
                <NavDropdown.Item href={"/login"}>
                  Se connecter
                </NavDropdown.Item>
                <NavDropdown.Item href={"/repertoireGenerale"}>
                  Répertoire Générale
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
