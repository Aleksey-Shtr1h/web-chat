import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ActionCreatorApp } from "../../../../../redux/app/appAction";

export const SideBarChannelList = ({ userProfile }) => {
  const dispatch = useDispatch();
  const channelsUser = Object.values(userProfile.channelsUser);

  return (
    <ul className="channels__list">
      {channelsUser.map(({ idRoom, nameRoom }, index) => {
        return (
          <li
            className="channels__item"
            key={nameRoom + index}
            onClick={() => {
              dispatch(ActionCreatorApp.changeChannelId(idRoom));
            }}
          >
            <Link
              className="channels__link"
              to={{ pathname: `/main/user-desktop/room/${idRoom}` }}
            >
              {nameRoom}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
