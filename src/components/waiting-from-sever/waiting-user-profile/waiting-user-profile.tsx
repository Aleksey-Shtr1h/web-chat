import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../../redux/typeState';
import { getUserProfile } from '../../../redux/user/usersSelector';

interface Props {
  children: React.ReactNode;
}

export const WaitingUserProfile: any = ({ children }: Props) => {
  const [loadingUserProfile, setLoadingUserProfile] = React.useState(false);

  const userProfile = useSelector((state: GlobalState) =>
    getUserProfile(state)
  );

  const initialUserProfile = React.useCallback(() => {
    if (userProfile) {
      setLoadingUserProfile(true);
    }
  }, [userProfile]);

  React.useEffect(() => {
    initialUserProfile();
  }, [initialUserProfile]);

  return loadingUserProfile && <>{children}</>;
};
