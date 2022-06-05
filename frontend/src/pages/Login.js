import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";

const Login = () => {
  return (
    <div>
      <NavbarComp />
      <Container>
        <Row className="justify-content-md-center mt-3">
          <Col md={6}>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  Email
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="email" placeholder="name@example.com" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="4">
                  Mot de passe
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="password" placeholder="Mot de passe" />
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-end">
          <Button variant="secondary">Se connecter</Button>{" "}
        </Row>
      </Container>
    </div>
  );
};

export default Login;
