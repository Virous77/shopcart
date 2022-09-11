import React, { useEffect } from "react";
import Header from "./Components/Layout/Header";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import ShopItem from "./Components/Shop/ShopItem";
import Footer from "./Components/Layout/Footer";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./store/cart-item";
import Auth from "./Components/Layout/Auth";

function App() {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.show.cartShow);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const cart = useSelector((state) => state.cart);

  const fetchCartData = () => {
    return async (dispatch) => {
      const fetchData = async () => {
        const res = await fetch(
          "https://onlineorder-fac3e-default-rtdb.asia-southeast1.firebasedatabase.app/onlineorder.json"
        );

        if (!res.ok) {
          throw new Error("Could not fetch cart data!");
        }

        const data = res.json();

        return data;
      };

      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    };
  };

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    const sendCartData = async () => {
      const res = await fetch(
        "https://onlineorder-fac3e-default-rtdb.asia-southeast1.firebasedatabase.app/onlineorder.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!res.ok) {
        throw new Error("Sending cart data failed.");
      }

      const resData = await res.json();
    };

    sendCartData(cart);
  }, [cart]);

  return (
    <div className="App">
      {!isAuth && <Auth />}

      {isAuth && (
        <div>
          <Header />
          {isShow && <Cart />}
          <ShopItem />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
