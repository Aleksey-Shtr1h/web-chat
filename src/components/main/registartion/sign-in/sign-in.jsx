import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {OperationUser} from '../../../../redux/user/userReducer.js';

export const SignIn = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const dispatch = useDispatch();

  return (
    <main className="main-login">
      <div className="container login">
        <form 
          className="form-sign-in"
          action="#"
          method="post"
          onSubmit={(evt) => {
            evt.preventDefault();
            dispatch(OperationUser.userAuth(email, password));
          }} 
        >

          <div className="wrap-sign-form">
            <ul className="sign-in-data">

              <li className="sign-in-data__item">
                <label className="sign-in-data__text" htmlFor="email">Email</label>
                <input 
                  className="sign-in-data__input" 
                  type="email" 
                  id="email" 
                  placeholder="email@gmail.com"
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </li>

              <li className="sign-in-data__item">
                <label className="sign-in-data__text" htmlFor="password">Password</label>
                <input 
                  className="sign-in-data__input" 
                  type="password" 
                  id="password" 
                  placeholder="*********"
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </li>

            </ul>

            <div className="sign-in-data__remember">
              <input className="sign-in-data__remember-checkbox" type="checkbox" id="remember"/>
               <label className="sign-in-data__remember-text" htmlFor="remember">Remember Me</label>
            </div>

            <button className="sign-in-btn-submit" type="submit">Sign In</button>
          </div>

        </form>
      </div>
    </main>
  )
};