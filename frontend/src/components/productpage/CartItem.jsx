import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function CartItem(props) {

  return (
    <Container className='mt-3' style={{border:"1px solid black",padding:"10px"}} fluid>
        <Row>
            <Col lg={3}>
            <img src={props.product.image} alt="product" style={{height:"50px"}} />
            
            </Col>
            <Col>
            <p style={{color:"var(--main-color)"}}>{props.product.name}</p>
            
            
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
            <ButtonGroup aria-label="Basic example" style={{width:"90%"}}>
      <Button variant="secondary">&#9207;</Button>
      <Button variant="secondary" disabled>{props.product.quantity}</Button>
      <Button variant="secondary">&#9206;</Button>
    </ButtonGroup>
            </Col>
            <Col>
            <Button variant="outline-secondary" style={{width:"90%"}}>Remove</Button>
            </Col>
        </Row>
        
    </Container>
  )
}

export default CartItem