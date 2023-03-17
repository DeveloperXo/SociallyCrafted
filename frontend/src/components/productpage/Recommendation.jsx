import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../homepage/ProductCard";
import axios from "axios";
//import { ObjectId } from "mongodb";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import ReactStars from "react-stars";

function Recommendation() {
  /*const products = [
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
      name: "LED Lights",
      description:
        "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
      price: 599,
      ratings: 5,
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
          url: "https://5.imimg.com/data5/SELLER/Default/2022/7/QK/SS/IH/80153581/71brjvmbvxl-sl1500-1--500x500.jpg",
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
      ratings: 1,
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
  ];*/
  //var products = [];
  const [products, setProducts] = useState([]);

  const { id } = useParams();

<<<<<<< HEAD
     axios.get(`http://127.0.0.1:5000/recommendations?id=${id}`)
      .then((res)=>{
         console.log('products----', res.data.products)
        //console.log(res.data.products)
        res.data.products && res.data.products.map((ele) => {
          if(ele.name){
            products.push(ele)
          }
        })
        
      }).catch(function (error) {
        console.log('error', error);
      })

    console.log('products', products)
    
=======
  axios
    .get(`http://127.0.0.1:5000/recommendations?id=${id}`)
    .then((res) => {
      //console.log(res.data.products)
      res.data.products &&
        res.data.products.map((ele) => {
          if (ele.name) {
            products.push(ele);
          }
        });
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log(products); 
 
>>>>>>> add25f515179c0cf91b47e9c37ed6fecbf52cb78
  return (
    <>
      <Container>
        <h4>Recommended Products</h4>
        <br />
        <Row>
          {products &&
            products.slice(0, 5).map((product) => (
              <Col key={product._id}>
                <div>
                  <Link
                    className="product-card"
                    to={`/product/${product._id}`}
                  >
                    <Stack className="product-stack" gap={1}>
                      <img 
                        src={product.images[0].url}
                        alt={product.name}
                        style={{ height: "200px", width: "200px" }}
                      />
                      <h6>
                        <b>{product.name}</b>
                      </h6>
                      <div style={{ display: "flex" }}>
                        <ReactStars
                          edit={false}
                          color2={"#174066"}
                          value={product.ratings}
                          size={"18px"}
                        />
                        <p style={{ marginBottom: "0" }}>
                          {" "}
                          ({product.numOfReviews} reviews)
                        </p>
                      </div> 
                      <h4>₹ {product.price}</h4> 
                    </Stack>
                  </Link>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default Recommendation;
