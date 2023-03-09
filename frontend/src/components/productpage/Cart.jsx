import React from 'react';
import CartItem from "./CartItem";
import Container from 'react-bootstrap/esm/Container';

function Cart() {
  const product = {
    name: "Wall Hanging Shelf",
    price: 299,
    quantity: 1,
    image: "https://images.meesho.com/images/products/109086297/6lsqi_256.webp"
  }
  return (
    <>
    <Container>
      <CartItem product={product}/>
      {/* <CartItem product={product}/> */}
    </Container>
    </>
  )
}

export default Cart