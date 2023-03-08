import React from 'react';
import ProductCard from "../homepage/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductFilters from "./ProductFilters";

import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import HomePageHeader from '../homepage/HomePageHeader';

function AllProducts() {
  const dispatch = useDispatch();
  const {products } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  if(!products){
    console.log('Error fetching products')
  }
  if(products){
    if(products.length == 0){
      console.log('No products to display')
    }
  }
  return (
    <>
    <HomePageHeader/>
    <br/>
    <br/>

    <br/> <br/> <br/>    <div>
        <Container className="me-5 ms-5">
        <Row>
          <Col lg={3}>
            <ProductFilters />
          </Col>
          <Col>
            <Row>
              {products&&products.length>0?products && products.map((product) => (
                <Col key={product._id}>
                  <ProductCard product={product}  />
                </Col>
              )): <Row><b>No products to display</b></Row>}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default AllProducts