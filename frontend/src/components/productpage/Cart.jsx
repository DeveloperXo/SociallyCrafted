import React, { useEffect, useState } from 'react';
import CartItem from "./CartItem";
import Container from 'react-bootstrap/esm/Container';
import { addToCart, removeCartItem } from "../../actions/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from '../../actions/cartAction';

function Cart() {
  const dispatch = useDispatch();
  const getCart = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState(getCart.cartItems);

  const onQuantityChange = (product, qty) => {
    dispatch(addToCart(product , qty))
  }
  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };
  useEffect(() => {
    setCartItems(getCart.cartItems)
  }, [getCart.cartItems])

  useEffect(()=>{
    dispatch(getCartItems())
  }, [])

  const getEachPrice = () => {
      let totalPrice = 0;
      Object.keys(cartItems).map((key, index) => {
        for(let i = 0; i<cartItems[key].qty; i++){
          totalPrice += cartItems[key].price;
        }
      });
      return {totalPrice};
    }
  return (
    <>
    <Container>
          <p><b>Total Price - {getEachPrice().totalPrice}</b></p>
          <br />
      </Container>
    <Container>
      {Object.keys(cartItems).map((key, index) => <CartItem key={index} cartItems={cartItems[key]}
      onQuantityChange = {onQuantityChange} onRemoveCartItem={onRemoveCartItem}
       />)}
    </Container>
    </>
  )
}

export default Cart