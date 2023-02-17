import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import ReactStars from "react-stars";
import "./productcard.css";

export default function ProductCard(props) {
  return (
    <Link className="product-card" to={`/product/${props.product._id}`}>
      <Stack className="product-stack" gap={1}>
        <img
          src={props.product.images[0].url}
          alt={props.product.name}
          style={{ height: "200px", width: "200px" }}
        />
        <h6>
          <b>{props.product.name}</b>
        </h6>
        <div style={{display: "flex"}}>
          <ReactStars edit={false} color2={"#174066"} value={props.product.ratings} size={"18px"}/>
          <p style={{ marginBottom: "0" }}> ({props.product.numOfReviews} ratings)</p>
        </div>
        <h4>₹ {props.product.price}</h4>
      </Stack>
    </Link>
  );
}
