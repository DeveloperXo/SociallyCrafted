import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import cloth from "../../Images/clothing-categ.jpeg";
import hang from "../../Images/hanging-categ.jpeg";
import jw from "../../Images/jewellery-categ.jpg";
import fd from "../../Images/food-categ.jpeg";
import "./Categories.css";
import Category from "./Category";

export default function Categories() {
  return (
    <div className="categories">
      <Container >
        <Row>
          <Category tagline="Authentic to new Trendy Modern Clothing    items" bgimg={cloth} />
          <Category tagline="Uniquely crafted decorative wall hanging items" bgimg={hang} />
          <Category tagline="Traditionally handmade jewellery items made with love" bgimg={jw} />
          <Category tagline="Delicious home made food products" bgimg={fd} />
        </Row>
      </Container>
    </div>
  );
}
