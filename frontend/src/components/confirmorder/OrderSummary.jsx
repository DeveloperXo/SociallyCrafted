import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { addOrder } from '../../actions/orderAction';
import { useDispatch, useSelector } from "react-redux";

function OrderSummary(props) {
  const address = useSelector((state) => state.orderDetails.address)
  console.log('990',address)
  // let history = useNavigate();
  const dispatch = useDispatch();

  const getPrice = () => {
    let productsTotalPrice = 0;
    let shippingCharges = 120;
    let subTotal = 0;
      props.products.map((product) => {
        for (let i = 0; i < product.qty; i++) {
          productsTotalPrice += product.price;
        }
      })
      subTotal = shippingCharges + productsTotalPrice;
      return { productsTotalPrice, shippingCharges, subTotal };
  }
<<<<<<< HEAD

  const handlePlaceOrder = () => {
    let totalAmount = getPrice().subTotal;
    const items = props.products.map((product) => ({
      productId: product._id,
      payablePrice: product.price,
      purchasedQty: product.qty
   }));
   if(address){
     const payload = {
      address: address,
      totalAmount,
      items,
      paymentStatus: 'pending',
      paymentType: 'cod'
     }
     console.log('payload', payload)
     dispatch(addOrder(payload))
   }
   else{
    alert('Please enter your address')
   }
   //  history('/orders/addOrder')
  }
  const [pMethod, setPMethod] = useState('cod')
  const handlePaymentMethod = (event) => {
    setPMethod(event.target.id)
    event.target.checked = true
    console.log('event', pMethod)
=======
  function done(){
    alert("Order placed successfully!!");
>>>>>>> add25f515179c0cf91b47e9c37ed6fecbf52cb78
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
          onClick={handlePaymentMethod}
          checked={true}
        />
        <Form.Check
          type='radio'
          name="group1"
          id="onlinePay"
          label="Online payment"
          onClick={handlePaymentMethod}
        />
      </div>
      <div style={{ display: "flex", "justify-content": "center" }}>
        <Button className='mt-5' onClick={done} style={{
          borderRadius: "0",
          backgroundImage:
            "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
          border: "None",
          color: "white",
          padding: "10px",
          width: "250px",
          marginRight: "10px",
        }} onClick={handlePlaceOrder}>Place Order</Button>
      </div>

    </div>
  )
}

export default OrderSummary