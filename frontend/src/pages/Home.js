import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";

const Home = () => {
  return (
    <div>
      <NavbarComp />
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Image
              src="https://www.avocat-oger-ombredane-tavenard.fr/wp-content/uploads/2019/08/cabinet-ioo-avoc.jpg"
              alt="image Notariat 2.0"
            ></Image>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <h3>
              Bienvenue sur l'application des notaires du canton de Neuchâtel
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
