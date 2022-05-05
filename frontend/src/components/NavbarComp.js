import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Annuaire from './Annuaire';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant='dark' expand="lg">
                        <Container>
                            <Navbar.Brand as={Link} to={'/'}>Notariat 2.0</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto" >
                                    <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                                    <Nav.Link as={Link} to={'/annuaire'}>Annuaire</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/annuaire" element={<Annuaire />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}   