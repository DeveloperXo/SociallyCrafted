import Header from "../homepage/HomePageHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import HistoryOrder from "./HistoryOrder";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../actions/orderAction";

export default function UserProfile() {
  const dispatch = useDispatch();

  const orders = useSelector((state => state.orderDetails))
  console.log('pop',orders.orders)

  const token = localStorage.getItem("token");
  let user = JSON.parse(localStorage.getItem("user"))

  const products = [];
  orders.orders.forEach((elem) => {
    products.push(elem)
    console.log('0',elem)
  })

  useEffect(() => {
      dispatch(getOrders(token))
  }, [token])
  console.log('products', products)

  // const products = orders ? orders.order.payload.items : [];
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <Row>
              <h4 className="mb-3">Personal Information</h4>

              <Row className="align-items-center">
                <Col sm={3} className="my-1">
                  <Form.Label
                    htmlFor="inlineFormInputGroupUsername"
                    visuallyHidden
                  >
                    name
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={{ "z-index": "-1" }}>Name</InputGroup.Text>
                    <Form.Control style={{ "z-index": "-1" }}
                      id="inlineFormInputGroupUsername"
                      placeholder="name"
                      value={user && user.name.toUpperCase()}
                    />
                  </InputGroup>
                </Col>
                <Col sm={3} className="my-1">
                  <Form.Label
                    htmlFor="inlineFormInputGroupUsername"
                    visuallyHidden
                  >
                    Address
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={{ "z-index": "-1" }}>Address</InputGroup.Text>
                    <Form.Control style={{ "z-index": "-1" }}
                      id="inlineFormInputGroupUsername"
                      placeholder="Address"
                    />
                  </InputGroup>
                </Col>

                <Col xs="auto" className="my-1">
                  <Button
                    type="submit"
                    style={{
                      width: "10rem",
                      borderRadius: "0",
                      backgroundImage:
                        "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
                      border: "None",
                    }}
                  >
                    {true ? "Edit" : "Submit"}
                  </Button>
                </Col>
              </Row>
            </Row>
            <hr/>
            <br />
            <Row>
              <h4 className="mb-3">Account Information</h4>
              <Row className="align-items-center">
                <Col sm={3} className="my-1">
                  <Form.Label
                    htmlFor="inlineFormInputGroupUsername"
                    visuallyHidden
                  >
                    Email
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={{ "z-index": "-1" }}>Email</InputGroup.Text>
                    <Form.Control style={{ "z-index": "-1" }}
                      id="inlineFormInputGroupUsername"
                      placeholder="name"
                      value={user.email}
                    />
                  </InputGroup>
                </Col>
                <Col sm={3} className="my-1">
                  <Form.Label
                    htmlFor="inlineFormInputGroupUsername"
                    visuallyHidden
                  >
                    Phone
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={{ "z-index": "-1" }}>Phone</InputGroup.Text>
                    <Form.Control style={{ "z-index": "-1" }}
                      id="inlineFormInputGroupUsername"
                      placeholder="Phone"
                    />
                  </InputGroup>
                </Col>

                <Col xs="auto" className="my-1">
                  <Button
                    type="submit"
                    style={{
                      width: "10rem",
                      borderRadius: "0",
                      backgroundImage:
                        "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
                      border: "None",
                    }}
                  >
                    {true ? "Edit" : "Submit"}
                  </Button>
                </Col>
              </Row>
            </Row>
            <hr/>
            <br />
            <Row>
              <h4 className="mb-3">Order History</h4>
              {/* {products.map((product) => (
                <HistoryOrder product={product} />
              ))} */}
              <HistoryOrder product={products} />
            </Row>
          </Col>
          <Col lg={4}> </Col>
        </Row>
      </Container>
    </>
  );
}
