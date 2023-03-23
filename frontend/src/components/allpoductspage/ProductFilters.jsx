import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ProductFilters() {
  return (
    <div>
      <h4 className="text-left">Filters</h4>
      <div className="mb-3">Categories</div>
      <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Craft" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Women's Clothing" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Men's Clothing" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Food" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Jewellery" />
      </Form.Group>
      <hr/>
      <br/>
      <div className="mb-3">Price</div>
      <Form>
      <Row>
        <Col>
          <Form.Control placeholder="min" />
        </Col>
        <Col>
          <Form.Control placeholder="max" />
        </Col>
      </Row>
    </Form>
    <hr/>
    <br/>
    <div className="mb-3">Availability</div>
    <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Show products from sellers you follow" />
      </Form.Group>
    </div>
  );
}
