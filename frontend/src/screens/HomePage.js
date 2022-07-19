import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {products} from '../products';
import {ProductCard} from "../components";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          {products.map((i, index) => {
            return (
              <Col sm={12} md={6} lg={3} key={index}>
                <ProductCard product={i}/>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
};

export default Home;
