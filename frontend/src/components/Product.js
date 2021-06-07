import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card
      className="my-3 p-0 rounded"
      style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px" }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text as="h5">{product.price}฿</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
