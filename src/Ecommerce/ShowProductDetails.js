import React from 'react'
import { Button, Card } from 'react-bootstrap';

function ShowProductDetails({product}) {
  return (
    <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Button
              style={{ backgroundColor: 'white', color: 'black' }}
              variant="primary"
            //   onClick={() => {
            //     // value.changeConBackColor(product.color);
            //     addItem({ ...product, image: randomImageUrl });
            //   }}
            >
              Add to Cart
            </Button>
          </Card.Body>
          
  )
}

export default ShowProductDetails
