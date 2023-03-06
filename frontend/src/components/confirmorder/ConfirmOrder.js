import React from 'react'
import ProductPageHeader from '../productpage/ProductPageHeader'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Details from './Details';
import CartDetails from './CartDetails';
import OrderSummary from './OrderSummary';

function ConfirmOrder() {
    const products=[{
        name: "LED Lights",
        description: "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
        price: 599,
        ratings: 3,
        numOfReviews: 10,
        images: [
          {
            public_id: 1,
            url: "https://images.meesho.com/images/products/109086297/6lsqi_256.webp",
          },
        ],
        category: "craft",
        Stock: 10,
      },
      {
          name: "LED Lights",
          description: "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
          price: 599,
          ratings: 5,
          numOfReviews: 10,
          images: [
            {
              public_id: 1,
              url: "https://cdn.shopify.com/s/files/1/1305/2183/products/BulbLamp_23_1024x1024.jpg?v=1613467822",
            },
          ],
          category: "craft",
          Stock: 10,
        }]
  return (
    <>
    <ProductPageHeader/>
    <br/><br/>
    <br/><br/>
    <Container>
        <Row>
            <Col>
            <Row> <Details/> </Row>
            <Row> <CartDetails products={products}/> </Row>
            </Col>
            <Col lg={4}> <OrderSummary/> </Col>
        </Row>
    </Container>
    </>
  )
}

export default ConfirmOrder