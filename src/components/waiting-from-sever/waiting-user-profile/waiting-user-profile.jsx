import React from "react";
import { useSelector } from "react-redux";
import { getUserProfile } from "../../../redux/user/usersSelector";

export const WaitingUserProfile = ({ children }) => {
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

  return loadingUserProfile && <>{children}</>;
};
