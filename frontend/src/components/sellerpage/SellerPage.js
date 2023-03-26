// import "../productpage/productPage.css";
import "./sellerpage.css";
import HomePageHeader from "../homepage/HomePageHeader";
import pimage from "../../Images/pimg.jpg";
import SingleProduct from "./singleProduct";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { fetchSeller, addFollower } from '../../actions/sellerAction'

import ProductCard from '../homepage/ProductCard'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SellerPage() {

  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.seller);
  console.log('sellerProducts', {seller, products: seller.sellerProducts})

  let products = seller ? seller.sellerProducts : []; // array of products
  
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(fetchSeller(id))
  },[id])
  
  let followText = "Follow";
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user._id;

  if(seller.seller && seller.seller.followers){
    if(seller.seller.followers.length>0){
      Object.keys(seller.seller.followers).map((key, index) => {
        if(userId === seller.seller.followers[key]._id){
          followText = "Following"
        }
      })
    }
  }
  const handleAddFollower = (e) => {
    dispatch(addFollower(userId, id))
    followText = "Following"
    e.target.disabled = true;
  } 

  return (
    <>
      <HomePageHeader />
      <br></br>
      <div className="sellerContainer">
        <div className="upperSide">
          <div className="left">
            <h1>{seller.seller ? seller.seller.name.toUpperCase() : 'Seller Name'}</h1>
            <span>
              {/* Crafty home decoration <br></br>Crafty home decoration things that
              enhance the beauty of your home.<br></br>Jaipur, Maharashtra. */}
            </span>
            {seller.seller ? 
            <>
            <span className="blueSpan">
              <sapn className="num">{seller.seller && products.length}</sapn>{" "}
              <sapn className="text">Products</sapn>{" "}
              <span className="num">{seller.seller && seller.seller.followers?seller.seller.followers.length:0}</span>
              <span className="text"> Followers</span>
            </span>
            </>
              : ""}
              { seller.seller ? 
            <div className="rsbuttons">
              <button className="bluebutton" onClick={handleAddFollower} >{followText}</button>
            </div>
            : <p>Failed while fetching seller details. Please try again..</p> }
          </div>
          <div className="right">
            {/* <img
              style={{ height: "250px", width: "250px" }}
              alt=""
              src="https://i.fbcd.co/products/resized/resized-750-500/709af4d6e2926394e1808a2ca3ed35a28af1c37bec37e5183c922e0b26522a58.jpg"
            ></img> */}
            <div className="seller-logo-wrap right" 
            style={{
              width: "250px", 
              height: "250px", 
              textAlign: "center",
              border: "2px solid #174066", 
              borderRadius: "50%"
              }}>
              <p className="seller-logo" style={{fontSize: "150px", fontWeight: "600", color: "rgba(0,0,0,.5)"}}>
                {seller.seller && seller.seller.name.slice(0,1).toUpperCase()}
              </p>
            </div>
          </div>
        </div>
        <Container>
          <Row>
          {products && products.length > 0 ? products.map((product) => (
                <Col key={product._id}>
                  <ProductCard product={product}  />
                </Col>
              )) : "Looks like there are no products that belong to this seller..."}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SellerPage;
