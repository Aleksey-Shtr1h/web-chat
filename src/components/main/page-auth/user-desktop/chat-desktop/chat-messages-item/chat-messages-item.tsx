import React from 'react';
import { useSelector } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

import { Preload } from '../../../../../preload/preload';

import { getUserProfile } from '../../../../../../redux/user/usersSelector';
import { chooseUserCoomment } from '../../../../../../redux/data/dataSelector';

import { getTimeFormat } from '../../../../../../utils/utils';

import { AppRoute, PreloadSettings } from '../../../../../../constant';
import { GlobalState } from '../../../../../../redux/typeState';

interface Message {
  idMessage: string;
  message: string;
  nameUser: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
    toDate: () => string;
  };
  userId: string;
}

interface Props {
  comment: Message;
}

export const ChatMessangesItem: React.FC<Props> = ({ comment }: Props) => {
  const { message, nameUser, timestamp, userId } = comment;
  const preload = <BarLoader loading />;

  const userProfile = useSelector((state: GlobalState) =>
    getUserProfile(state)
  );
  const userComment = useSelector((state: GlobalState) =>
    chooseUserCoomment(state, userId)
  );

  const isHost = userProfile?.userId === userId;

  const userPhoto = userComment?.photoUrl;

  const StyleItemMessage = {
    ITEM_CLASS: isHost ? 'messages__host-item' : 'messages__user-item',
    TEXT_CLASS: isHost ? 'messages__host-text' : 'messages__user-text',
    INFO_CLASS: isHost ? 'host-info' : 'user-info',
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
