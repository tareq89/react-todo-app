import React from "react";
import { Card, Button } from "react-bootstrap";

export const CartItem = ({ name, image, quantity }) => {
  const onIncrease = () => {};
  const onDecrease = () => {};
  const onRemove = () => {};
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={image} style={{ width: "10rem" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Quantity:
          <Button variant="primary" size="sm" onClick={onDecrease}>
            -
          </Button>
          <input type="number" value={quantity} readOnly />
          <Button variant="primary" size="sm" onClick={onIncrease}>
            +
          </Button>
        </Card.Text>
        <Button variant="danger" onClick={onRemove}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};
