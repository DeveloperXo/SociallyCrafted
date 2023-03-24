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

  const [products, setProducts] = useState([]);

  const { id } = useParams();


  // axios.get(`http://127.0.0.1:5000/recommendations?id=${id}`)
  //   .then((res) => {
  //     console.log('products----', res.data.products)
  //     //console.log(res.data.products)
  //     res.data.products && res.data.products.map((ele) => {
  //       if (ele.name) {
  //         products.push(ele)
  //       }
  //     })

  //   }).catch(function (error) {
  //     console.log('error', error);
  //   })

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
                    to={`/product/${product._id.$oid}`}
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
                          value={product.rating}
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
