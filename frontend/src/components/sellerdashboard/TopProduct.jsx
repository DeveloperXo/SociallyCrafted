import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function TopProduct(props) {
  return (
    <Row className="p-3">
        <Col lg={2}>
        <img src={props.product.images[0].url} alt="product"  style={{width:"60px", height:"60px"}}/>
        </Col>
        <Col>
        <h5>{props.product.name}</h5>
        </Col>
        <Col>
        <h5>567 units sold</h5>
        </Col>
        <Col>
        <Link to={`/forecast/${props.product.id}`}>
        <Button variant="secondary" style={{
                width: "10rem",
                "borderRadius": "0",
                "backgroundImage":
                  "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
                border: "None",
              }}>View forecast</Button></Link>
        </Col>
      </Row>
  )
}

export default TopProduct