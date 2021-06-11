import React from 'react';
import { useDispatch } from 'react-redux';

import { OperationData } from '../../../../../redux/data/dataReducer';
import { LoadUsersRoomInterface } from '../../../../../redux/data/typesData';
import { UserProfileInterface } from '../../../../../redux/user/typesUser';

interface Props {
  selectRoom: LoadUsersRoomInterface | null;
  userProfile: UserProfileInterface | null;
}

export const SubscribeButton: React.FC<Props> = ({
  selectRoom,
  userProfile,
}: Props) => {
  const dispatch = useDispatch();
  // const { userId } = userProfile;
  // const {
  //   idRoom,
  //   usersRoom,
  //   info: { nameRoom },
  // } = selectRoom;

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            OperationData.addUserToChannel(
              userProfile?.userId,
              selectRoom?.idRoom,
              selectRoom?.usersRoom,
              selectRoom?.info?.nameRoom
            )
          );
        }}
      >
        Subribe Channel
      </button>
    </div>
  );
};
