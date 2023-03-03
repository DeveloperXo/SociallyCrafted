import React from 'react'
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

function Category(props) {
  return (
    <>
    
    <Col className='mx-4' style={{"background-image":`url(${props.bgimg})`, "background-repeat":"no-repeat","display":"flex","align-items":"flex-end",height:"400px",width:"400px"}}>
        <Stack>
            <div></div>
        <h4 className='my-auto text-light'>{props.tagline}</h4>
        <Link className='mb-auto' to={"/products"}>
        <Button
        className='mb-auto'
              style={{
                width: "10rem",
                "borderRadius": "0",
                "backgroundColor": "rgba(38,38,38,0.2)",
                border: "1px solid white",
              }}
              variant="outline-light"
              
            >
              Explore Products
            </Button></Link>
        </Stack>
    </Col>
    </>
  )
}

export default Category