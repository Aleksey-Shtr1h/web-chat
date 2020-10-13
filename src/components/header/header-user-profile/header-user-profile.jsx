import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {HeaderUserLink} from '../header-user-link/header-user-link.jsx';

import {ActionCreatorApp} from '../../../redux/app/appAction.js';
import {SignMenu} from '../../../constant.js';

export const HeaderUserProfile = () => {
  const dispatch = useDispatch();
  const {isBurgerBtn} = useSelector((state) => state.APP);
  const {isOnline} = useSelector((state) => state.USER);

  return (
    <section className="user-profile">
      <h2 className="visually-hidden">user profile</h2>

      <div className={`wrapper-link-menu ${isBurgerBtn ? 'wrapper-link-menu-open' : ''}`}>
        <div className={`response-menu ${isBurgerBtn ? 'response-menu-burger' : ''}`}>
          {isOnline ? 
            SignMenu.auth.map((signMenu, id) => 
              <HeaderUserLink 
                dispatch={dispatch}
                isOnline={isOnline}
                signMenu={signMenu}
                key={signMenu.name + id}
              />
          ) :
            SignMenu.notAuth.map((signMenu, id) => 
              <HeaderUserLink 
                dispatch={dispatch}
                isOnline={isOnline}
                signMenu={signMenu}
                key={signMenu.name + id}
              />
            )
          }
        </div>
      </div>

      <div className="wrapper-icon-menu">
        <input 
          className="checkbox3 visuallyHidden" 
          type="checkbox" 
          id="checkbox3" 
          onChange={() => {
            dispatch(ActionCreatorApp.changeBurgerBtn(!isBurgerBtn));
          }}
          checked={isBurgerBtn ? 'checked' : ''}
        />
        <label htmlFor="checkbox3">
          <div className="hamburger hamburger3">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
            <span className="bar bar4"></span>
          </div>
        </label>
      </div>
    
    </section>
  )
};
