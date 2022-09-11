import { createSlice, configureStore } from "@reduxjs/toolkit";
import cartItems from "./cart-item";

const isCartShow = createSlice({
  name: "Cart",
  initialState: { cartShow: false },
  reducers: {
    toggleCart(state) {
      state.cartShow = !state.cartShow;
    },
  },
});

const authCheck = createSlice({
  name: "Auth",
  initialState: { isAuth: false },
  reducers: {
    logIn(state) {
      state.isAuth = true;
    },

    logOut(state) {
      state.isAuth = false;
    },
  },
});

export const AuthActions = authCheck.actions;
export const showCartActions = isCartShow.actions;

const store = configureStore({
  reducer: {
    show: isCartShow.reducer,
    cart: cartItems.reducer,
    auth: authCheck.reducer,
  },
});

export default store;
