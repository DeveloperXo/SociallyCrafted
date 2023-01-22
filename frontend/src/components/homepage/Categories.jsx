import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import craft from "../../Images/craft.png";
import kurdai from "../../Images/kurdai.png";
import Acc from "../../Images/Acc.png";
import cloth from "../../Images/cloth.png";
import "./Categories.css";

export default function Categories() {
  return (
    <div className="categories">
      <Container fluid>
        <h5 style={{marginBottom:"30px"}}>Browse by Categories</h5>
        <Row>
          <Col style={{cursor:"pointer"}}>
            <img id="cat-img" src={craft} alt="craft" />
            <br />
            <p id="cat-text">Craft</p>
          </Col>
          <Col>
            <img id="cat-img" src={kurdai} alt="craft" />
            <br />
            <p id="cat-text">Food</p>
          </Col>
          <Col>
            <img id="cat-img" src={Acc} alt="craft" />
            <br />
            <p id="cat-text">Accessories</p>
          </Col>
          <Col>
            <img id="cat-img" src={cloth} alt="craft" />
            <br />
            <p id="cat-text">Clothing</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
