import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import ProductCard from './ProductCard'

import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function FeaturedProducts() {
  const dispatch = useDispatch();
  const {products } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
    <h2 className='text-center'>Featured Products</h2>
    <br/>
    <br/>
    <Container>
      <Row>
      {products && products.slice(0, 10).map((product) => (
                <Col key={product._id}>
                  <ProductCard product={product}  />
                </Col>
              ))}
      </Row>
    </Container>
    </>
  )
}

export default FeaturedProducts