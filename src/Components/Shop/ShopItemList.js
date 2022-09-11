import React from "react";
import "../styles/ShopItemList.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-item";

const ShopItemList = ({ title, price, description, id }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: id,
        title: title,
        price: price,
      })
    );
  };

  return (
    <li className="product-bar">
      <div className="product-name">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="product-info">
        <h2>${price}</h2>
        <button className="product-button" onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default ShopItemList;
