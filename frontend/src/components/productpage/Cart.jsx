import React, { useEffect, useState } from 'react';
import CartItem from "./CartItem";
import Container from 'react-bootstrap/esm/Container';
import { addToCart, removeCartItem } from "../../actions/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from '../../actions/cartAction';
import { buyProduct } from '../../actions/checkoutAction';
import { Link } from "react-router-dom";
import { checkoutConstants } from '../../constants/checkoutConstants';

function Cart() {
  const dispatch = useDispatch();
  const getCart = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState(getCart.cartItems);

  const onQuantityChange = (product, qty) => {
    dispatch(addToCart(product, qty))
  }
  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };
  useEffect(() => {
    setCartItems(getCart.cartItems)
  }, [getCart.cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  const getEachPrice = () => {
    let totalPrice = 0;
    Object.keys(cartItems).map((key, index) => {
      for (let i = 0; i < cartItems[key].qty; i++) {
        totalPrice += cartItems[key].price;
      }
    });
    return { totalPrice };
  }

  const handleCartCheckout = () => {
    dispatch(buyProduct({type: checkoutConstants.BUY_NOW, payload: cartItems}))
    console.log('fsdhf', cartItems)
  }
  return (
    <>
      <Container>
        <p><b>Total Price - {getEachPrice().totalPrice}</b></p>
        <br />
      </Container>
      <Container>
        {Object.keys(cartItems).map((key, index) => <CartItem key={index} cartItems={cartItems[key]}
          onQuantityChange={onQuantityChange} onRemoveCartItem={onRemoveCartItem}
        />)}
      </Container>
      <Container style={{
        "margin-top": "30px"
      }}>
        <div className="rsbuttons">
          <Link to={'/confirm/order'}>
            <button className="" style={{
              borderRadius: "0",
              backgroundImage:
                "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
              border: "None",
              color: "white",
              padding: "8px 5px",
              width: "200px",
              marginRight: "10px",
            }} onClick={handleCartCheckout}>Proceed to checkout</button>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Cart