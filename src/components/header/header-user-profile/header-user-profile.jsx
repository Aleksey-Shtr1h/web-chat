import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { HeaderUserLink } from "../header-user-link/header-user-link.jsx";

import { ActionCreatorApp } from "../../../redux/app/appAction.js";
import { getStateUserOnline } from "../../../redux/user/usersSelector.js";

import { SignMenu } from "../../../constant.js";
import {
  getStateModalAddChannel,
  getStateBurgerBtn,
} from "./../../../redux/app/appSelector";

export const HeaderUserProfile = () => {
  const dispatch = useDispatch();

  const isModalAddChannel = useSelector((state) =>
    getStateModalAddChannel(state)
  );
  const isBurgerBtn = useSelector((state) => getStateBurgerBtn(state));
  const isOnline = useSelector((state) => getStateUserOnline(state));

  return (
    <section className="user-profile">
      <h2 className="visually-hidden">user profile</h2>

      <div
        className={`wrapper-link-menu ${
          isBurgerBtn ? "wrapper-link-menu-open" : ""
        }`}
      >
        <div className="response-menu response-menu-burger">
          {isOnline && (
            <button
              className="add-channel-btn"
              onClick={() => {
                dispatch(
                  ActionCreatorApp.toglleModalAddChannel(!isModalAddChannel)
                );
                dispatch(ActionCreatorApp.changeBurgerBtn(false));
              }}
            >
              +
            </button>
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
        </div>
      </div>

      <div
        className={`wrapper-icon-menu ${
          isBurgerBtn ? "wrapper-icon-menu-active" : ""
        }`}
      >
        <input
          className="checkbox3 visuallyHidden"
          type="checkbox"
          id="checkbox3"
          onChange={() => {
            dispatch(ActionCreatorApp.changeBurgerBtn(!isBurgerBtn));
          }}
          checked={isBurgerBtn ? "checked" : ""}
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
  );
};
