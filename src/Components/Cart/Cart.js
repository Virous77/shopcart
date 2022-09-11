import React, { Fragment, useState } from "react";
import CartItem from "./CartItem";
import "../styles/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-item";

const Cart = () => {
  const [show, setShow] = useState([]);
  const dispatch = useDispatch();
  const [main, setMain] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const orderHandler = () => {
    setShow(
      cartItems.map((items) => (
        <p className="orderIt" key={items.id}>
          <span className="done">Order Received!!!</span>
          <span>Products: {items.title} </span>
          <span>Total-Price: {items.totalPrice} </span>
          <span>Quantity: {items.quantity}</span>
        </p>
      ))
    );

    setMain(true);
    dispatch(cartActions.deleteAll(cartQuantity));
  };

  return (
    <Fragment>
      <div className="cart-bars">
        <h2>Your Shopping Cart</h2>
        <h3>{show}</h3>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                title={item.title}
                id={item.id}
                quantity={item.quantity}
                total={item.totalPrice}
                price={item.price}
                main={main}
              />
            ))}
          </ul>
        ) : (
          <p className="empty">Your cart is Empty!</p>
        )}
        <div className="order">
          <button onClick={orderHandler}>Order</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
