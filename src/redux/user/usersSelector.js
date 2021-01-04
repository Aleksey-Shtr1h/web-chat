export const getUserProfile = (state) => {
  return state.USER.userProfile;
};

export const getStateUserOnline = (state) => {
  return state.USER.isOnline;
};

export const getUserAuthId = (state) => {
  return state.USER.userAuthId;
};