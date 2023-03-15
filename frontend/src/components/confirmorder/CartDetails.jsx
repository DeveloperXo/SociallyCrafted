import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

function CartDetails(props) {
  console.log('props', props.products)
  return (
    <>
    <div>
      {props.products.map((product) =>
        <Row className='mb-3'>
          <Col lg={2}>
            <img src={product.img} alt="product" style={{ height: "70px" }} />
          </Col>
          <Col><h5>{product.name}</h5></Col>
          <Col><p>Quantity - {product.qty}</p></Col>
          <Col><h5>₹ {product.price}</h5></Col>
        </Row>
      )}
    </div>
  </>
      )
}

export default CartDetails