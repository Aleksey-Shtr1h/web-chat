import React from "react";
import { useSelector } from "react-redux";
import { BarLoader } from "react-spinners";
import { Link } from "react-router-dom";

import { Preload } from "../../../../../preload/preload";

import { getUserProfile } from "./../../../../../../redux/user/usersSelector";
import { chooseUserCoomment } from "../../../../../../redux/data/dataSelector";

import { getTimeFormat } from "../../../../../../utils/utils";

import {
  AppRoute,
  PreloadSettings,
  USER_UNKNOWN_PHOTO_URL,
} from "../../../../../../constant";

export const ChatMessangesItem = ({ comment }) => {
  const { message, nameUser, timestamp, userId } = comment;
  const preload = <BarLoader loading />;

  const userProfile = useSelector((state) => getUserProfile(state));
  const userComment = useSelector((state) => chooseUserCoomment(state, userId));

  const isHost = userProfile.userId === userId;

  const userPhoto =
    "photoUrl" in userComment ? userComment.photoUrl : USER_UNKNOWN_PHOTO_URL;

  const StyleItemMessage = {
    ITEM_CLASS: isHost ? "messages__host-item" : "messages__user-item",
    TEXT_CLASS: isHost ? "messages__host-text" : "messages__user-text",
    INFO_CLASS: isHost ? "host-info" : "user-info",
  };

  return (
    <li className={`chat-messages__item ${StyleItemMessage.ITEM_CLASS}`}>
      {timestamp === null ? (
        <Preload
          preloadSettings={PreloadSettings.MESSAGES_ITEM}
          preload={preload}
        />
      ) : (
        <>
          {!isHost && (
            <Link
              className="chat-messages__user-avatar-link"
              to={AppRoute.MAIN_ID.USER_DESKTOP_ID.FRIEND_ID + `${nameUser}`}
            >
              <img
                className="chat-messages__user-img"
                src={userPhoto}
                alt="user-avatar"
                width="54"
                height="54"
              />
            </Link>
          )}
          <div className="chat-messages__info">
            <div
              className={`messages-user-info ${StyleItemMessage.INFO_CLASS} `}
            >
              {!isHost && (
                <p className="messages__user-name-text">{nameUser}</p>
              )}
              <time className="messages__user-time">
                {getTimeFormat(timestamp.toDate())}
              </time>
            </div>
            <p className={`chat-messages__text ${StyleItemMessage.TEXT_CLASS}`}>
              {message}
            </p>
          </div>
        </>
      )}
    </li>
  );
};
