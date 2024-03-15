import React, { useMemo } from "react";
import { Card, Button } from "react-bootstrap";
import { useCartStore } from "./store";
import { ThemeContext } from "./Ecommerce";

export const ProductCard = (product) => {
  const { addItem } = useCartStore();
  const randomImageUrl = useMemo(() => `https://picsum.photos/200/200?random=${Math.random()}`, []);

  return (
    <ThemeContext.Consumer>
      {(value) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img src={randomImageUrl} variant="top" style={{ width: "18rem" }} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Button
              style={{ backgroundColor: value.backgroundColor, color: value.color }}
              variant="primary"
              onClick={() => {
                value.changeConBackColor(product.color);
                addItem({ ...product, image: randomImageUrl });
              }}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      )}
    </ThemeContext.Consumer>
  );
};
