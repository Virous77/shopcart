import React from "react";
import "../styles/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../../store/Index";
import { AuthActions } from "../../store/Index";

const Header = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const cartShowHandler = () => {
    dispatch(showCartActions.toggleCart());
  };

  const logoutHandler = () => {
    dispatch(AuthActions.logOut());
  };
  return (
    <header className="header">
      <h1>ShopCart</h1>

      <nav className="nav">
        <ul className="nav-list">
          <li className="cart" onClick={cartShowHandler}>
            <span>My Cart</span> <span className="badge">{cartQuantity}</span>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
