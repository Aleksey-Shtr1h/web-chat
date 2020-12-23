import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ActionCreatorApp } from "../../../../../redux/app/appAction.js";

export const SideBarFriendsItem = ({ user, index }) => {
  const { friendsActiveName } = useSelector((state) => state.APP);
  const dispatch = useDispatch();

  const { info, status } = user;

  return (
    <li className="friends__item">
      <Link
        className={`friends__link friends__link--${status.state}
        ${info.name === friendsActiveName ? `friends__link--active` : ``}`}
        to={{ pathname: `/main/user-desktop/friends/${info.name}` }}
        onClick={() => dispatch(ActionCreatorApp.changeFriendsName(info.name))}
      >
        {info.name}
      </Link>
    </li>
  );
};
