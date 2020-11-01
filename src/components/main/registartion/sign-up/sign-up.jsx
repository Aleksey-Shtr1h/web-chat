import React, {useState} from 'react';
import {useDispatch} from 'react-redux'

import {OperationUser} from '../../../../redux/user/userReducer.js';

export const SignUp = () => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);
  const dispatch = useDispatch();

  const validPassword = password !== `` ? (password === confirmPassword ? true : false) : false;
  const validEmail = email !== `` ? true : false;
  const validName = name !== `` ? true : false;

  return (
    <main className="main-login">
      <div className="container login-box">
        <form 
          className="form-sign-in"
          action="#"
          method="post"
          onSubmit={(evt) => {
            evt.preventDefault();

            if(!validPassword || !validName || !validEmail) {
              return;
            }

            dispatch(OperationUser.userRegistration(name, email, password));
          }}
        >

          <div className="wrap-sign-form">
            <ul className="sign-in-data">

              <li className={`sign-in-data__item ${validName ? '' : 'error-valid-item'}`}>
                <label className="sign-in-data__text" htmlFor="login-name">Name</label>
                <input 
                  className="sign-in-data__input" 
                  type="text" 
                  id="login-name" 
                  placeholder="Jhon Anderson"
                  value={name}
                  onChange={(evt) => setName(evt.target.value)}
                />
              </li>

              <li className={`sign-in-data__item ${validEmail ? '' : 'error-valid-item'}`}>
                <label className="sign-in-data__text" htmlFor="email">Email</label>
                <input 
                  className="sign-in-data__input" 
                  type="email" 
                  id="email" 
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </li>

              <li className={`sign-in-data__item ${validPassword ? '' : 'error-valid-item'}`}>
                <label className="sign-in-data__text" htmlFor="password">Password</label>
                <input 
                  className={`sign-in-data__input ${validPassword ? '' : 'error-valid-password'}`}
                  type="password" 
                  id="password"
                  placeholder="*********"
                  value={password}
                  autoComplete="off"
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </li>

              <li className={`sign-in-data__item ${validPassword ? '' : 'error-valid-item'}`}>
                <label className="sign-in-data__text" htmlFor="confirm_password">Confirm Password</label>
                <input 
                  className={`sign-in-data__input ${validPassword ? '' : 'error-valid-password'}`}
                  type="password" 
                  id="confirm_password" 
                  placeholder="*********"
                  value={confirmPassword} 
                  autoComplete="off"
                  onChange={(evt) => setConfirmPassword(evt.target.value)}
                />
              </li>

            </ul>

            <div className="sign-in-data__remember">
              <input className="sign-in-data__remember-checkbox" type="checkbox" id="remember"/>
               <label className="sign-in-data__remember-text" htmlFor="remember">I agree to Terms of Use</label>
            </div>

            <button className="sign-in-btn-submit" type="submit">Sign Up</button>
          </div>

        </form>
      </div>
    </main>
  )
};