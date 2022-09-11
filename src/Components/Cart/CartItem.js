import React from "react";
import "../styles/Cart.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-item";

const Cart = ({ total, price, title, quantity, id, main }) => {
  const dispatch = useDispatch();

  const removeCartHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const addCartHandler = () => {
    dispatch(cartActions.addToCart({ id, title, price }));
  };

  return (
    <section className="cart-bar">
      {!main && (
        <div className="cart-items">
          <div className="item-name">
            <h1>{title}</h1>
            <h3>x{quantity}</h3>
          </div>
          <div className="item-data">
            <div className="item-price">
              <h2> ${total}</h2>
              <h5>(${price}/item)</h5>
            </div>

            <div className="item-button">
              <button onClick={removeCartHandler}>-</button>
              <button onClick={addCartHandler}>+</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
