import React from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function HistoryOrder(props) {
  return (
    <div className='mb-3' style={{}}>
        <Row className='mb-3'>
          <Col lg={2}>
            <img src={props.product.images[0].url} alt="product" style={{ height: "70px", width:"70px" }} />
          </Col>
          <Col><h5 className='mt-3'>{props.product.name}</h5></Col>
          <Col><h5 className='mt-3'>Status of order</h5></Col>
        </Row>
      </div>
  )
}

export default HistoryOrder