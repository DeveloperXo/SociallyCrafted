import Form from "react-bootstrap/Form";
export default function ProductFilters() {
  return (
    <div>
      <h4 className="text-left">Filters</h4>
      <div>Categories</div>
      <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Craft" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Clothing" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Food" />
      </Form.Group>
      <div>Price</div>
      <Form.Range />
    </div>
  );
}
