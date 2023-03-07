import Header from '../homepage/HomePageHeader';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from 'react'
import { useSelector } from 'react-redux';

export default function UserProfile() {
  
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
    <Header />
    <br/><br/>
    <br/><br/>
    <Container>
        <Row>
            <Col>
            <Row></Row>
            <Row> Name : {user.name.toUpperCase()} </Row>
            <Row> Email : {user.email} </Row>
            <Row> Role : {user.role} </Row>
            </Col>
            <Col lg={4}>  </Col>
        </Row>
    </Container>
    </>
  )
}
