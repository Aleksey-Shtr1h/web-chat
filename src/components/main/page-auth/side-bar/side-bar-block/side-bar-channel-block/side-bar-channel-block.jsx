import React from "react";
import { useSelector } from "react-redux";

import { SideBarNameBlock } from "../side-bar-name-block/side-bar-name-block";
import { SideBarChannelList } from "../side-bar-channel-list/side-bar-channel-list";

import { getTogglePreloadChannels } from "../../../../../../redux/app/appSelector";
import { getUserProfile } from "../../../../../../redux/user/usersSelector";
import { TypeSideBarNameBlock } from "../../../../../../constant";

export const SideBarChannelBlock = () => {
  const isPreloadChannels = useSelector((state) =>
    getTogglePreloadChannels(state)
  );
  const userProfile = useSelector((state) => getUserProfile(state));

  if (isPreloadChannels) {
    return (
      <SideBarNameBlock
        typeChannels={TypeSideBarNameBlock.CHANNELS}
        styleColor={{ color: "#ffffff" }}
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
