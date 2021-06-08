import React from 'react';
import { useSelector } from 'react-redux';

import { SideBarNameBlock } from '../side-bar-name-block/side-bar-name-block';
import { SideBarChannelList } from '../side-bar-channel-list/side-bar-channel-list';

import { getTogglePreloadChannels } from '../../../../../../redux/app/appSelector';
import { getUserProfile } from '../../../../../../redux/user/usersSelector';
import { TypeSideBarNameBlock } from '../../../../../../constant';
import { GlobalState } from '../../../../../../redux/typeState';
import { UserProfileInterface } from '../../../../../../redux/user/typesUser';

export const SideBarChannelBlock: React.FC = () => {
  const isPreloadChannels = useSelector((state: GlobalState) =>
    getTogglePreloadChannels(state)
  );
  const userProfile:
    | UserProfileInterface
    | any = useSelector((state: GlobalState) => getUserProfile(state));

  if (isPreloadChannels) {
    return (
      <SideBarNameBlock
        typeChannels={TypeSideBarNameBlock.CHANNELS}
        styleColor={{ color: '#ffffff' }}
        nameSpan={`Loading...`}
      />
    );
  }

  return (
    <>
      {userProfile && `channelsUser` in userProfile ? (
        <>
          <SideBarNameBlock
            typeChannels={TypeSideBarNameBlock.CHANNELS}
            styleColor={{ color: '#ffffff' }}
            nameSpan={userProfile.channelsUser.length}
          />
          <SideBarChannelList userProfile={userProfile} />
        </>
      ) : (
        <>
          <div className="channels-header">
            <p className="channels-header__text">not channels</p>
          </div>
        </>
      )}
    </>
  );
};
