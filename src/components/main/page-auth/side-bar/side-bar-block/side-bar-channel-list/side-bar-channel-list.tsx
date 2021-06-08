import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ActionCreatorApp } from '../../../../../../redux/app/appAction';

import { OperationData } from '../../../../../../redux/data/dataReducer';
import { getShotTitleRoom } from '../../../../../../utils/utils';
import { AppRoute } from '../../../../../../constant';
import { UserProfileInterface } from './../../../../../../redux/user/typesUser';

interface Props {
  userProfile: UserProfileInterface | any;
}

interface ChannelsUserInterface {
  idRoom: string;
  nameRoom: string;
}

export const SideBarChannelList: React.FC<Props> = ({ userProfile }: Props) => {
  const dispatch = useDispatch();
  const channelsUser: ChannelsUserInterface[] = Object.values(
    userProfile.channelsUser
  );

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
                {getShotTitleRoom(nameRoom, 10)}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};