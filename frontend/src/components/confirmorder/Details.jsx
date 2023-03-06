import React from 'react'
import Form from 'react-bootstrap/Form'

function Details() {
  return (
    <div>
        <h3 className='mb-3'>Please fill in your details</h3>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="Enter number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </div>
  )
}

export default Details