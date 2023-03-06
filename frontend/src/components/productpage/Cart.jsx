import React from 'react';
import CartItem from "./CartItem";

function Cart() {
  const product = {
    name: "Wall Hanging Shelf",
    price: 299,
    quantity: 1,
    image: "https://images.meesho.com/images/products/109086297/6lsqi_256.webp"
  }
  return (
    <div>
      <CartItem product={product}/>
      <CartItem product={product}/>
    </div>
  )
}

export default Cart