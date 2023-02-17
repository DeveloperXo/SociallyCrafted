import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import DetailsHeader from "./DetailsHeader";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function DetailsPage() {
  return (
    <>
      <DetailsHeader />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <h3 className="text-center">Please fill in the Details</h3>
        <Row className="lg-me-9">
          <Form>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>GST Number</Form.Label>
              <Form.Control type="number" placeholder="Enter number"  required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter number" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Business Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Business Dessciprtion</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
            
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Agree to terms and conditions" />
            </Form.Group>
            <Button type="submit" style={{
                width: "10rem",
                "borderRadius": "0",
                "backgroundImage":
                  "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
                border: "None",
              }}>
              Submit Details
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}
