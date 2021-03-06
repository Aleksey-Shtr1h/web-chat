import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ActionCreatorApp } from "../../../../../../redux/app/appAction.js";
import { getFriendsActiveName } from "../../../../../../redux/app/appSelector.js";

import { AppRoute, USER_UNKNOWN_PHOTO_URL } from "./../../../../../../constant";

export const SideBarFriendsItem = ({ user }) => {
  const friendsActiveName = useSelector((state) => getFriendsActiveName(state));
  const dispatch = useDispatch();

  const { info, status } = user;

  const userPhoto = "photoUrl" in user ? user.photoUrl : USER_UNKNOWN_PHOTO_URL;

  return (
    <li className="friends__item">
      <Link
        className={`friends__link friends__link--${status.state}
        ${info.name === friendsActiveName ? `friends__link--active` : ``}`}
        to={AppRoute.MAIN_ID.USER_DESKTOP_ID.FRIEND_ID + `${info.name}`}
        onClick={() => dispatch(ActionCreatorApp.changeFriendsName(info.name))}
      >
        <img
          className="friends__user-img"
          src={userPhoto}
          alt="user-avatar"
          width="34"
          height="34"
        />
        {info.name}
      </Link>
    </li>
  );
};
