import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import ProductRating from "./ProductRating";


const ProductCard = ({product}) => {
  return (
    <Card className='my-3 rounded'>
      <Link to={`/products/${product._id}`}>
        <Card.Img variant="top" src={product.image} className='p-3 rounded'/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text as='div'>
            <div className='my-3'>
              <ProductRating value={product.rating} text={product.reviews} />
            </div>
          </Card.Text>
          <Card.Text as='h3'>{product.price}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
};

export default ProductCard;
