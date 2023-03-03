import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import bimg from "../../Images/hero-image-bg.jpg";
import { Link } from "react-router-dom";
import "./Heroband.css";

function Heroband() {
  return (
    <Container id="hero-cntnr" fluid>
        <Row style={{"background-image":`url(${bimg})`, "background-repeat":"no-repeat", height:"60vh"}}>
          <Col></Col>
            <Col style={{"display":"flex","flex-direction": "column", "justify-content":"center"}} >
            <h1  style={{ "margin-top":"50px","fontFamily": "poppins", color: "white" }}>from Homemade Authentic to all new trendy items just curated for you!</h1><br></br>
            <h5 id="sh"  >Follow your favourite sellers to get the latest trendy products...</h5>
            <br/>
            <Link to={"/products"}><Button
              style={{
                width: "10rem",
                "borderRadius": "0",
                border: "None",
              }}
              variant="light"
              
            >
              View all Products
            </Button></Link>
            </Col>
        </Row>
    </Container>
  )
}

export default Heroband