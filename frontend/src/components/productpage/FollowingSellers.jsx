import React, { useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import ReactStars from "react-stars";

import { getFollowingProducts } from '../../actions/sellerAction';
import { useDispatch, useSelector } from 'react-redux';

function FollowingSellers() {
  const dispatch = useDispatch();
  const { fProducts } = useSelector((state => state.seller))
  let products = [];
  const following = JSON.parse(localStorage.getItem('user')).following;

  useEffect(() => {
    if (following) {
      Object.keys(following).map((key) => {
        dispatch(getFollowingProducts(following[key]))
      })
    }
    else {
      console.log('lol')
    }
  }, [])
  if(fProducts){
   fProducts.map((elem) => {
      if(elem.length>0){
        elem.map((prod) => {
          products.push(prod)
        })
      }
    })
  } 
  return (
    <>
      <Container>
        <h4>Products from sellers you follow</h4>
        <br />
        <Row>
          {products && products.length > 0 ?
            products.slice(0, 5).map((product) => (
              <Col key={product._id}>
                <div>
                  <Link
                    className="product-card"
                    to={`/product/${product._id}`}
                  >
                    <Stack className="product-stack" gap={1}>
                      <img
                        src={product && product.images[0].url}
                        alt={products && product.name}
                        style={{ height: "200px", width: "200px" }}
                      />
                      <h6>
                        <b>{products && product.name}</b>
                      </h6>
                      <div style={{ display: "flex" }}>
                        <ReactStars
                          edit={false}
                          color2={"#174066"}
                          value={products && product.rating}
                          size={"18px"}
                        />
                        <p style={{ marginBottom: "0" }}>
                          {" "}
                          ({products && product.numOfReviews} reviews)
                        </p>
                      </div>
                      <h4>₹ {products && product.price}</h4>
                    </Stack>
                  </Link>
                </div>
              </Col>
            )): <p><b>Looks like you are not following any sellers yet...</b></p>}
        </Row>
      </Container>
    </>
  )
}

export default FollowingSellers