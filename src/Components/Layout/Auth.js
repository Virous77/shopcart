import React from "react";
import "../styles/Auth.css";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/Index";

const Auth = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(AuthActions.logIn());
  };

  return (
    <section className="auth">
      <div className="cool">
        <h1>ShopCart</h1>
      </div>

      <form onSubmit={submitHandler}>
        <div className="details">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" required />
        </div>

        <div className="details">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>

        <button className="submit">Login</button>
      </form>
    </section>
  );
};

export default Auth;
