import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { ADD_USER_ADDRESS } from '../../constants/userConstants';
import { useDispatch, useSelector } from 'react-redux';

function Details() {
  const dispatch = useDispatch();
  const savedAddress = useSelector((state) => state.orderDetails.address)
  const [value, setValue] = useState(savedAddress ? { phoneNumber: savedAddress.phoneNumber, addressInfo: savedAddress.addressInfo } : "")
  const handleOnchange = (event) => {
    setValue(event.target.value)
  }
  const handleOnSubmit = (event) => {
    event.preventDefault()
    if (event.target[0].value && event.target[1].value) {
      const address = {
        phoneNumber: event.target[0].value,
        addressInfo: event.target[1].value
      }
      dispatch({ type: ADD_USER_ADDRESS, payload: address })
    }
  }
  return (
    <div>
      <h3 className='mb-3'>Please fill in your details</h3>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="number" placeholder="Enter number" onChange={handleOnchange} value={value.phoneNumber} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={handleOnchange} value={value.addressInfo} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <button className='mt-2' style={{
            borderRadius: "0",
            backgroundImage:
              "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
            border: "None",
            color: "white",
            padding: "10px",
            width: "200px",
            marginRight: "10px",
          }} type='submit'>Confirm address</button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Details