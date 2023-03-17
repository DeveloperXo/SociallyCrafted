import React from 'react'
import ProductPageHeader from '../productpage/ProductPageHeader'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Details from './Details';
import CartDetails from './CartDetails';
import OrderSummary from './OrderSummary';
import { useSelector } from "react-redux";


function ConfirmOrder() {

  const singleProduct = useSelector((state) => state.checkout)
  const { payload } = useSelector((state) => state.checkout.checkoutProducts);
  const address = useSelector((state) => state.orderDetails)
  console.log('address----', address)
  const getProducts = () => {
    let products = [];
    Object.keys(payload).map((key) => {
      products.push(payload[key])
    })
    return { products }
    }
  return (
    <>
      <ProductPageHeader />
      <br /><br />
      <br /><br />
      <Container>
        <Row>
          <Col>
            <Row> <Details /> </Row>
            <h3 className='mt-5 mb-5'>Your items</h3>
            <Row>
              {payload ?
                Object.keys(payload).map((key, index) => <CartDetails key={index} products={[payload[key]]} />) :
                <CartDetails products={[singleProduct.checkoutProducts]} />}
            </Row>
          </Col>
          <Col lg={4}>
            {payload ? <OrderSummary products={getProducts().products} /> :  <OrderSummary products={[singleProduct.checkoutProducts]} />}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ConfirmOrder