import Button from 'react-bootstrap/Button';
import React from 'react'
import Form from 'react-bootstrap/Form';

function OrderSummary(props) {
  const getPrice = () => {
    let productsTotalPrice = 0;
    let shippingCharges = 120;
    let subTotal = 0;
    console.log('price', props.products)
      props.products.map((product) => {
        for (let i = 0; i < product.qty; i++) {
          productsTotalPrice += product.price;
        }
      })
      subTotal = shippingCharges + productsTotalPrice;
      return { productsTotalPrice, shippingCharges, subTotal };
  }
  return (
    <div style={{ padding: "20px" }}>
      <h3 className='text-center mb-3'>Order Summary</h3>
      <hr />
      <div style={{ display: "flex", "justify-content": "space-between" }}><p>Subtotal: </p><p>₹  {getPrice().productsTotalPrice}</p></div>

      <br />
      <div style={{ display: "flex", "justify-content": "space-between" }}><p>Shipping Charges: </p><p>₹ {getPrice().shippingCharges}</p></div>

      <hr />
      <div style={{ display: "flex", "justify-content": "space-between" }}><p>Total: </p><p>₹ {getPrice().subTotal}</p></div>

      <h5 className='mt-5 mb-3'>Select payment method</h5>
      <div>
        <Form.Check
          type='radio'
          id="cod"
          name="group1"
          label="Cash on Delivery"
        />
        <Form.Check
          type='radio'
          name="group1"
          id="ol"
          label="Online payment"
        />
      </div>
      <div style={{ display: "flex", "justify-content": "center" }}>
        <Button className='mt-5' style={{
          borderRadius: "0",
          backgroundImage:
            "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
          border: "None",
          color: "white",
          padding: "10px",
          width: "250px",
          marginRight: "10px",
        }} >Place Order</Button>
      </div>

    </div>
  )
}

export default OrderSummary