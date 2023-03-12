import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function CartItem(props) {
  const [qty, setQty] = useState(props.cartItems.qty)
  const { _id, name, price, img } = props.cartItems;
  const onQuantityIncrement = () => { 
    setQty(qty + 1)
    props.onQuantityChange({_id, name, price, img}, qty + 1  )
  }
  const onQuantityDecrement = () => {
    if(qty == 1) return;
    setQty(qty -1)
    props.onQuantityChange({_id, name, price, img}, qty -1)
  }
  const onRemoveItem = () => [
    props.onRemoveCartItem(_id)
  ]
  return (
    <>
    <Container className='mt-3' style={{ border: "1px solid black", padding: "10px" }} fluid>
      <Row>
        <Col lg={3}>
          <img src={img} alt="product" style={{ height: "50px" }} />
        </Col>
        <Col>
          <p style={{ color: "var(--main-color)" }}>{name}</p>
          <p style={{ color: "var(--main-color)" }}>₹ {price}</p>


        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <ButtonGroup aria-label="Basic example" style={{ width: "90%" }}>
            <Button variant="secondary" onClick={onQuantityDecrement}>&#9207;</Button>
            <Button variant="secondary" disabled>{qty}</Button>
            <Button variant="secondary" onClick={onQuantityIncrement}>&#9206;</Button>
          </ButtonGroup>
        </Col>
        <Col>
          <Button variant="outline-secondary" style={{ width: "90%" }} onClick={onRemoveItem}>Remove</Button>
        </Col>
      </Row>

    </Container>
    </>
  )
}

export default CartItem