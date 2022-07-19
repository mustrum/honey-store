import React from "react";
import {Container, Row, Col, Image, ListGroup, Card, Button, Alert} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {products} from '../products';
import ProductRating from "../components/products/ProductRating";


const Product = () => {
  const product = products.find(el => el._id === useParams().id);
  return (
    <Container>
      <Link className="btn btn-dark my-3" to="/products">назад</Link>
      <Row>
        <Col md={3}>
          <Image src={product.image} alt={product.name} className="img-fluid"/>
        </Col>
        <Col md={3}>
          <h3>{product.name}</h3>
          <ProductRating value={product.rating}/>
          <p>{product.description}</p>
          <hr/>
          <h5>{product.price} лв.</h5>

        </Col>
        <Col md={{span: 3, offset: 3}}>
          <p>Цена: {product.price} лв</p>
          { product.inStock > 0
            ? <>
                <Alert className="text-center" variant="success">в наличност</Alert>
                <Button className="btn btn-dark" >добави в количка</Button>
              </>
            : <Alert className="text-center" variant="danger">изчерпан</Alert>
          }

        </Col>
      </Row>
    </Container>
  )
};

export default Product;
