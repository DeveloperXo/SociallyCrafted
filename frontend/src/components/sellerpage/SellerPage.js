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
  const products = [
    {
      name: "LED Lights",
      description:
        "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
      price: 599,
      ratings: 3,
      numOfReviews: 10,
      images: [
        {
          public_id: 1,
          url: "https://images.meesho.com/images/products/109086297/6lsqi_256.webp",
        },
      ],
      category: "craft",
      Stock: 10,
    },
    {
      name: "LED Lights",
      description:
        "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
      price: 599,
      ratings: 5,
      numOfReviews: 10,
      images: [
        {
          public_id: 1,
          url: "https://cdn.shopify.com/s/files/1/1305/2183/products/BulbLamp_23_1024x1024.jpg?v=1613467822",
        },
      ],
      category: "craft",
      Stock: 10,
    },
    {
        "name": "Pebble Paper Weight",
        "description": "The finest of Thangadh clay molded beautifully into a range of wire friendly birds define simplicity and endless appreciation to our surroundings.",
        "price": 354,
        "rating": 4.0,
        "numOfReviews": 20,
        "images": [
          {
            "public_id": 1,
            "url": "https://cdn.shopify.com/s/files/1/0284/2450/products/36_8916753c-e250-43ec-afeb-a61ea8143a24_1000x.jpg?v=1572957685"
          }
        ],
        "reviews": [
            {
              "user": "6401cfb08bd4ed7ce3de78e2",
              "rating": 4,
              "comment": "great"
            },
            {
                "user": "6401cfee8bd4ed7ce3de78e4",
                "rating": 5,
                "comment": "nice"
            },
            {
                "user": "6401cff68bd4ed7ce3de78e6",
                "rating": 3,
                "comment": "nice"
            },
            {
                "user": "6401d0208bd4ed7ce3de78e8",
                "rating": 5,
                "comment": "nice"
            },
            {
                "user": "6401f1a0a787ed42a83148f2",
                "rating": 2,
                "comment": "nice"
            },
            {
                "user": "6401f27ba787ed42a83148f4",
                "rating": 3,
                "comment": "nice"
            },
            {
                "user": "6401f283a787ed42a83148f6",
                "rating": 5,
                "comment": "nice"
            },
            {
                "user": "6401f28aa787ed42a83148f8",
                "rating": 4,
                "comment": "nice"
            },
            {
                "user": "6401f292a787ed42a83148fa",
                "rating": 5,
                "comment": "nice"
            },
            {
                "user": "6401f297a787ed42a83148fc",
                "rating": 4,
                "comment": "nice"
            },
            {
                "user": "6401f29ca787ed42a83148fe",
                "rating": 3,
                "comment": "nice"
            },
            {
                "user": "6401f2b1a787ed42a8314900",
                "rating": 5,
                "comment": "nice"
            },
            {
                "user": "6401f2b6a787ed42a8314902",
                "rating": 4,
                "comment": "nice"
            },
            {
                "user": "6401f2bda787ed42a8314904",
                "rating": 5,
                "comment": "nice"
            },
            {
                "user": "6401f2c2a787ed42a8314906",
                "rating": 5,
                "comment": "nice"
            },
            {
                "user": "6401f2c8a787ed42a8314908",
                "rating": 4,
                "comment": "nice"
            },
            {
                "user": "6401f2cda787ed42a831490a",
                "rating": 3,
                "comment": "nice"
            },
            {
                "user": "6401f2d3a787ed42a831490c",
                "rating": 3,
                "comment": "nice"
            },
            {
                "user": "6401f2d9a787ed42a831490e",
                "rating": 4,
                "comment": "nice"
            },
            {
                "user": "6401f320a787ed42a8314912",
                "rating": 4,
                "comment": "nice"
            }
          ],
        "category": "craft",
        "Stock": 10,
        "seller": "63d255616c34d74ff7e3948f"
      },
    {
      name: "LED Lights",
      description:
        "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
      price: 599,
      ratings: 5,
      numOfReviews: 10,
      images: [
        {
          public_id: 1,
          url: "https://5.imimg.com/data5/SELLER/Default/2022/7/QK/SS/IH/80153581/71brjvmbvxl-sl1500-1--500x500.jpg",
        },
      ],
      category: "craft",
      Stock: 10,
    },
    {
        "name": "Vintage Tissue Box",
        "description": "Our vintage tissue pull-out boxes in bright tangerine and tantalizing teal are perfect to place anywhere around the house.The quirky design on the tissue box makes it preferable to place in the kitchen area, dining room, drawing room, or bedroom.",
        "price": 940,
        "rating": 4.9,
        "numOfReviews": 12,
        "images": [
          {
            "public_id": 1,
            "url": "https://i.pinimg.com/564x/2b/65/67/2b6567714524ba07ceb70d40a1abb722.jpg"
          }
        ],
        "reviews": [
            
            {
                "user": "6401f292a787ed42a83148fa",
                "rating": 5,
                "comment": "super"
            },
            {
                "user": "6401f297a787ed42a83148fc",
                "rating": 5,
                "comment": "nice"
            },
            {
                "user": "6401f29ca787ed42a83148fe",
                "rating": 4,
                "comment": "good"
            },
            {
                "user": "6401f2b1a787ed42a8314900",
                "rating": 4,
                "comment": "nice"
            },
            {
                "user": "6401f2b6a787ed42a8314902",
                "rating": 5,
                "comment": "nice"
            },
            {
                "user": "6401f2bda787ed42a8314904",
                "rating": 5,
                "comment": "nice"
            },
            {
                "user": "6401f2c2a787ed42a8314906",
                "rating": 5,
                "comment": "nice"
            },
            {
                "user": "6401f2c8a787ed42a8314908",
                "rating": 4,
                "comment": "nice"
            },
            {
                "user": "6401f2cda787ed42a831490a",
                "rating": 5,
                "comment": "very good"
            },
            {
                "user": "6401f2d3a787ed42a831490c",
                "rating": 4,
                "comment": "good looking"
            },
            {
                "user": "6401f2d9a787ed42a831490e",
                "rating": 5,
                "comment": "very good"
            },
            {
                "user": "6401f320a787ed42a8314912",
                "rating": 5,
                "comment": "nice"
            }
          ],
        "category": "craft",
        "Stock": 10,
        "seller": "63d255616c34d74ff7e3948f"
      }
  ];
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
