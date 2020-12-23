import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { OperationUser } from "../../../../redux/user/userReducer.js";

export const SignIn = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const dispatch = useDispatch();

  return (
    <main className="main-login">
      <div className="container login">
        <form
          className="form-main form-sign"
          action="#"
          method="post"
          onSubmit={(evt) => {
            evt.preventDefault();
            dispatch(OperationUser.userAuth(email, password));
          }}
        >
          <div className="wrap-form-main">
            <ul className="form-main-list">
              <li className="form-main-list__item">
                <label
                  className="form-main-list__text form-login-list__text"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-main-list__input form-login-list__input"
                  type="email"
                  id="email"
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </li>

              <li className="form-main-list__item">
                <label
                  className="form-main-list__text form-login-list__text"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="form-main-list__input form-login-list__input"
                  type="password"
                  id="password"
                  placeholder="*********"
                  autoComplete="on"
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </li>
            </ul>

            <div className="sign-in-data__remember">
              <input
                className="sign-in-data__remember-checkbox"
                type="checkbox"
                id="remember"
              />
              <label className="sign-in-data__remember-text" htmlFor="remember">
                Remember Me
              </label>
            </div>

            <button
              className="form-main-btn-submit form-login-btn-submit"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
