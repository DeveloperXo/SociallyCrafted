import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SignPageHeader from "./SignPageHeader";
import CustomerForm from "./CustomerForm";
import SellerForm from "./SellerForm";
import customerHeroImage from "../../Images/customer-hero-image.png";
import sellerHeroImage from "../../Images/seller-hero-image.png";
import SellerAuth from "../sellerdashboard/SellerAuth";


export default function SignPage(params) {
  return (
    <div>
      <SignPageHeader></SignPageHeader>
      
      <br></br>
      <Container fluid style={{ "marginTop": "10vh" }}>
    
    <h1 className="text-center" style={{color:"var(--main-color)"}}>Are you a Customer looking to buy something Authentic?</h1>
    <h3 className="text-center" style={{color:"#0E7AA3"}}>We've got you covered...</h3>
        <Row className="p-5">
          <Col lg={6} md={6} sm={10}>
            <CustomerForm />
          </Col>
          <Col>
          <img style={{
            width: "40vw"
          }} src={customerHeroImage} 
          id="customerHeroImage"
          alt='hero' />
          </Col>
        </Row>

        <h1 className="text-center" style={{color:"var(--main-color)"}}>Are you a seller trying to establish your brand?</h1>
    <h3 className="text-center" style={{color:"#0E7AA3"}}>We've got you covered...</h3>
        <Row className="p-5 pb-0">
          <Col>
          <img style={{
            width: "40vw"
          }} src={sellerHeroImage}
          id = "sellerHeroImage"
           alt='hero' />
          </Col>
          <Col lg={6} md={6} sm={10}>
          <SellerAuth />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
