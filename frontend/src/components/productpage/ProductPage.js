import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProductDetails } from "../../actions/productAction";
import "./productPage.css";
import Carousel from "react-bootstrap/Carousel";

import { useParams } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

import ReactStars from "react-stars";
import ProductPageHeader from "./ProductPageHeader";
import Recommendation from "./Recommendation";


export default function ProductPage() {
  const { id } = useParams();

  

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productDetails);

  //console.log(product);
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  console.log(product.images);
  return (
    <>
      <ProductPageHeader />
      <div className="productContainer">
        <Row>
          <Col lg={5} style={{ "z-index": "-1" }}>
            <Carousel fade>
              {product.images &&
                product.images.map((image) => (
                  <Carousel.Item>
                    <img
                      style={{ "z-index": "-1" }}
                      className="d-block w-100"
                      src={image.url}
                      alt="slide"
                      height={"500px"}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </Col>
          <Col>
            <div className="product-description-container">
              <h2 style={{ color: "#174066" }}>{product.name}</h2>

              <h4>{product.description}</h4>
              <br />
              <Link
                style={{ "text-decoration": "none" }}
                to={`/seller/${product.seller}`}
              >
                <h5 id="seller-link">@seller</h5>
              </Link>
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
              <br />
              <h3 className="price">₹ {product.price}</h3>
              <hr></hr>
              <div className="rsbuttons">
                <button
                  style={{
                    borderRadius: "0",
                    backgroundImage:
                      "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
                    border: "None",
                    color: "white",
                    padding: "10px",
                    width: "250px",
                    marginRight: "10px",
                  }}
                >
                  Buy Now
                </button>
                <button
                  className="whitebutton"
                  style={{
                    borderRadius: "0",
                    border: "2px solid #174066",
                    color: "#174066",
                    padding: "8px",
                    width: "250px",
                  }}
                  
                >
                  Add to Cart
                </button>
                
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Recommendation />
    </>
  );
}
