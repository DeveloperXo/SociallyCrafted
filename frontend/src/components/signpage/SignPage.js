import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SignPageHeader from "./SignPageHeader";
import CustomerForm from "./CustomerForm";
import SellerForm from "./SellerForm";
import customerHeroImage from "../../Images/customer-hero-image.png";
import sellerHeroImage from "../../Images/seller-hero-image.png";

export default function SignPage(params) {
  return (
    <div>
      <SignPageHeader></SignPageHeader>
      
      <br></br>
      <Container fluid style={{ "marginTop": "10vh" }}>
    
        <Row className="p-5">
          <Col >
            <CustomerForm />
          </Col>
          <Col>
          <img style={{
            width: "40vw"
          }} src={customerHeroImage} alt='hero' />
          </Col>
        </Row>

        <Row className="p-5">
          <Col>
          <img style={{
            width: "40vw"
          }} src={sellerHeroImage} alt='hero' />
          </Col>
          <Col>
          <SellerForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
