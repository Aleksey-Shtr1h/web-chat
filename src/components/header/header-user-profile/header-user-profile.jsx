import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HeaderUserLink } from '../header-user-link/header-user-link';

import { ActionCreatorApp } from '../../../redux/app/appAction';
import { getStateUserOnline } from '../../../redux/user/usersSelector';

import { SignMenu } from '../../../constant';
import {
  getStateModalAddChannel,
  getStateBurgerBtn,
} from './../../../redux/app/appSelector';

import {
  UserHeaderMenuSection,
  UserHeaderMenuWrapper,
  UserHeaderResponseMenuWrapper,
  BtnAddChanel,
  IconMenuWrapper,
} from './header-user-profile.styled';

import './menu-icon.scss';

export const HeaderUserProfile = () => {
  const dispatch = useDispatch();

  const isModalAddChannel = useSelector((state) =>
    getStateModalAddChannel(state)
  );
  const isBurgerBtn = useSelector((state) => getStateBurgerBtn(state));
  const isOnline = useSelector((state) => getStateUserOnline(state));

  return (
    <UserHeaderMenuSection>
      <h2 className="visually-hidden">user profile</h2>

      <UserHeaderMenuWrapper isActiveMenu={isBurgerBtn}>
        <UserHeaderResponseMenuWrapper>
          {isOnline && (
            <BtnAddChanel
              onClick={() => {
                dispatch(
                  ActionCreatorApp.toglleModalAddChannel(!isModalAddChannel)
                );
                dispatch(ActionCreatorApp.changeBurgerBtn(false));
              }}
            >
              +
            </BtnAddChanel>
          )}

          {isOnline
            ? SignMenu.auth.map((signMenu, id) => (
                <HeaderUserLink
                  dispatch={dispatch}
                  isOnline={isOnline}
                  signMenu={signMenu}
                  key={signMenu.name + id}
                />
              ))
            : SignMenu.notAuth.map((signMenu, id) => (
                <HeaderUserLink
                  dispatch={dispatch}
                  isOnline={isOnline}
                  signMenu={signMenu}
                  key={signMenu.name + id}
                />
              ))}
        </UserHeaderResponseMenuWrapper>
      </UserHeaderMenuWrapper>

      <IconMenuWrapper
        isActiveMenu={isBurgerBtn}
        // className={`wrapper-icon-menu ${
        //   isBurgerBtn ? "wrapper-icon-menu-active" : ""
        // }`}
      >
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
      </IconMenuWrapper>
    </UserHeaderMenuSection>
  );
};
