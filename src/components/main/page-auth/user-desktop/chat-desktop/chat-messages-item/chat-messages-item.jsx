import React from "react";
import { useSelector } from "react-redux";
import { BarLoader } from "react-spinners";

import { Preload } from "../../../../../preload/preload";

import { getUserProfile } from "./../../../../../../redux/user/usersSelector";

import { getTimeFormat } from "../../../../../../utils/utils";

import {
  PreloadSettings,
  USER_UNKNOWN_PHOTO_URL,
} from "../../../../../../constant";

export const ChatMessangesItem = ({ comment }) => {
  const { message, nameUser, timestamp, userId } = comment;
  const preload = <BarLoader loading />;

  const userProfile = useSelector((state) => getUserProfile(state));

  const isHost = userProfile.userId === userId;

  const StyleItemMessage = {
    ITEM_CLASS: isHost ? "messages__host-item" : "messages__user-item",
    TEXT_CLASS: isHost ? "messages__host-text" : "messages__user-text",
    INFO_CLASS: isHost ? "host-info" : "user-info",
  };

  const userPhoto =
    "photoUrl" in userProfile ? userProfile.photoUrl : USER_UNKNOWN_PHOTO_URL;

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
            <a className="chat-messages__user-avatar-link" href="#">
              <img
                className="chat-messages__user-img"
                src={userPhoto}
                alt="user-avatar"
                width="54"
                height="54"
              />
            </a>
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
