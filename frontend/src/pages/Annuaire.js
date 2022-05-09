import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import CardView from "../components/CardView";
import NavbarComp from "../components/NavbarComp";

const Annuaire = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/annuaire/notaires")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <NavbarComp />
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            {data.map((notaire, index) => (
              <CardView key={index} notaire={notaire} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Annuaire;
