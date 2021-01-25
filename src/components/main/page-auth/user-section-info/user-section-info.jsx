import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

import { Preload } from "../../../preload/preload";

import { getUserProfile } from "./../../../../redux/user/usersSelector";

import { PreloadSettings } from "./../../../../constant";
import { UserBlockInfo } from "./user-block-info/user-block-info";
import { getStateUserInfoArrowBtn } from "../../../../redux/app/appSelector";

export const UserSectionInfo = () => {
  const [loadingUserProfile, setLoadingUserProfile] = React.useState(false);

  const userProfile = useSelector((state) => getUserProfile(state));
  const isUserInfoArrowBtn = useSelector((state) =>
    getStateUserInfoArrowBtn(state)
  );

  const initialUserProfile = React.useCallback(() => {
    if (userProfile) {
      setLoadingUserProfile(true);
    }
  }, [userProfile]);

  React.useEffect(() => {
    initialUserProfile();
  }, [initialUserProfile]);

  const showUserInfo = isUserInfoArrowBtn
    ? `section-user-info-show`
    : `section-user-info-hide`;

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
      className={`${showUserInfo} ${!loadingUserProfile ? "info-preload" : ""}`}
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
