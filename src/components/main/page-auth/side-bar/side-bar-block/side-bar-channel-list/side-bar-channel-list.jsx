import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ActionCreatorApp } from "../../../../../../redux/app/appAction";

import { OperationData } from "../../../../../../redux/data/dataReducer";
import { AppRoute } from "./../../../../../../constant";

export const SideBarChannelList = ({ userProfile }) => {
  const dispatch = useDispatch();
  const channelsUser = Object.values(userProfile.channelsUser);

  return (
    <ul className="channels__list">
      {channelsUser
        .sort((a, b) => {
          if (a.nameRoom > b.nameRoom) {
            return 1;
          } else {
            return -1;
          }
        })
        .map(({ idRoom, nameRoom }, index) => {
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
                to={AppRoute.MAIN_ID.USER_DESKTOP_ID.ROOM_ID + `${idRoom}`}
                onClick={() => {
                  dispatch(OperationData.loadChannel(idRoom));
                }}
              >
                {nameRoom}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
