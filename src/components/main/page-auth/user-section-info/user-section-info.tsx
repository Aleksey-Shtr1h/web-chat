import React from 'react';
import { useSelector } from 'react-redux';
import { RingLoader } from 'react-spinners';

import { Preload } from '../../../preload/preload';

import { getUserProfile } from '../../../../redux/user/usersSelector';

import { PreloadSettings } from '../../../../constant';
import { UserBlockInfo } from './user-block-info/user-block-info';
import { getStateUserInfoArrowBtn } from '../../../../redux/app/appSelector';
import { GlobalState } from '../../../../redux/typeState';

export const UserSectionInfo: React.FC = () => {
  const [loadingUserProfile, setLoadingUserProfile] = React.useState(false);

  const userProfile = useSelector((state: GlobalState) =>
    getUserProfile(state)
  );
  const isUserInfoArrowBtn = useSelector((state: GlobalState) =>
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

  const preload = <RingLoader color={'#000'} loading />;

  return (
    <section
      className={`${showUserInfo} ${!loadingUserProfile ? 'info-preload' : ''}`}
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
