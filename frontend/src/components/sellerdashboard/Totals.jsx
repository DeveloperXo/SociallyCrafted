import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sl from "../../Images/funds.png"
import prd from "../../Images/product.png"
import slll from "../../Images/selling.png"
import inc from "../../Images/income.png"

function Totals() {
  return (
    <Container>
      <Row>
        <Col>
        <div id="sale-tag">
            <Row>
                <Col>
                <p>Total sale</p>
                <h4>₹ 5000</h4>
                </Col>
                <Col>
                <img src={sl} alt="sales" />
                </Col>
            </Row>
        </div>
        </Col>
        <Col>
        <div id="sale-tag">
            <Row>
                <Col>
                <p>Monthly sale</p>
                <h4>₹ 5000</h4>
                </Col>
                <Col>
                <img src={inc} alt="sales" />
                </Col>
            </Row>
        </div>
        </Col>
        <Col>
        <div id="sale-tag">
            <Row>
                <Col>
                <p>Total orders</p>
                <h4>589</h4>
                </Col>
                <Col>
                <img src={prd} alt="sales" />
                </Col>
            </Row>
        </div>
        </Col>
        <Col>
        <div id="sale-tag">
            <Row>
                <Col>
                <p>Products</p>
                <h4>345</h4>
                </Col>
                <Col>
                <img src={slll} alt="sales" />
                </Col>
            </Row>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Totals