// import "../productpage/productPage.css";
import "./sellerpage.css";
import HomePageHeader from "../homepage/HomePageHeader";
import pimage from "../../Images/pimg.jpg";
import SingleProduct from "./singleProduct";
import React from "react";

import ProductCard from '../homepage/ProductCard'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SellerPage() {
 const products = [];
  return (
    <>
      <HomePageHeader />
      <br></br>
      <div className="sellerContainer">
        <div className="upperSide">
          <div className="left">
            <h1>crafty_home_decor</h1>
            <span>
              Crafty home decoration <br></br>Crafty home decoration things that
              enhance the beauty of your home.<br></br>Jaipur, Maharashtra.
            </span>
            <span className="blueSpan">
              <sapn className="num">59</sapn>{" "}
              <sapn className="text">Products</sapn>{" "}
              <span className="num">600</span>
              <span className="text"> Followers</span>
            </span>
            <div className="rsbuttons">
              <button className="bluebutton">Follow</button>
            </div>
          </div>
          <div className="right">
            <img
              style={{ height: "250px", width: "250px" }}
              alt=""
              src="https://i.fbcd.co/products/resized/resized-750-500/709af4d6e2926394e1808a2ca3ed35a28af1c37bec37e5183c922e0b26522a58.jpg"
            ></img>
          </div>
        </div>
        <Container>
          <Row>
          {products && products.slice(0, 10).map((product) => (
                <Col key={product._id}>
                  <ProductCard product={product}  />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SellerPage;
