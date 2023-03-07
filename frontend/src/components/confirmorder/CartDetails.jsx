import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

function CartDetails(props) {
  return (
    <div>
        <h3 className='mt-5 mb-5'>Your Cart items</h3>
        {props.products.map((product) =>
            <Row className='mb-3'>
            <Col lg={2}>
            <img src={product.images[0].url} alt="product" style={{height:"70px"}} />
            </Col>
            <Col><h5>{product.name}</h5></Col>
            <Col><h5>₹ {product.price}</h5></Col>
        </Row>
        )}
        
    </div>
  )
}

export default CartDetails