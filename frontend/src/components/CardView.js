import React from "react";
import { Card } from "react-bootstrap";

const CardView = ({ notaire }) => {
  return (
    <Card border="dark" style={{ width: "18rem" }} className="mx-auto my-2">
      <Card.Body>
        <Card.Title>{notaire.nom}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {notaire.prenom}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default CardView;
