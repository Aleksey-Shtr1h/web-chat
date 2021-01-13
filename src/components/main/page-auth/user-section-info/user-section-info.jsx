import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

import { Preload } from "../../../preload/preload";

import { getUserProfile } from "./../../../../redux/user/usersSelector";

import { PreloadSettings } from "./../../../../constant";
import { UserBlockInfo } from "./user-block-info/user-block-info";

export const UserSectionInfo = () => {
  const [loadingUserProfile, setLoadingUserProfile] = React.useState(false);

  const userProfile = useSelector((state) => getUserProfile(state));

  const initialUserProfile = React.useCallback(() => {
    if (userProfile) {
      setLoadingUserProfile(true);
    }
  }, [userProfile]);

  React.useEffect(() => {
    initialUserProfile();
  }, [initialUserProfile]);

  const preload = (
    <RingLoader
      height={40}
      width={8}
      radius={20}
      margin={20}
      color={"#000"}
      loading
    />
  );

  return (
    <section
      className={`section-user-info ${
        !loadingUserProfile ? "info-preload" : ""
      }`}
    >
      {loadingUserProfile ? (
        <UserBlockInfo userProfile={userProfile} />
      ) : (
        <Preload
          preloadSettings={PreloadSettings.PROFILE_INFO}
          preload={preload}
        />
      )}
    </section>
  );
};
