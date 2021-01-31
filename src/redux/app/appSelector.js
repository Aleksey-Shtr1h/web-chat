export const getTogglePreloadUsers = (state) => {
  return state.APP.isPreloadUsers;
};

export const getTogglePreloadChannels = (state) => {
  return state.APP.isPreloadChannels;
};

export const getTogglePreloadMessanges = (state) => {
  return state.APP.isPreloadMessanges;
};

export const getStateModalAddChannel = (state) => {
  return state.APP.isModalChannelAdd;
};

export const getStateBurgerBtn = (state) => {
  return state.APP.isBurgerBtn;
};

export const getFriendsActiveName = (state) => {
  return state.APP.friendsActiveName;
};

export const getSubscribedUser = (state) => {
  return state.APP.isSubscribedUser;
};

export const getStateEditUserDate = (state) => {
  return state.APP.isEditUserData;
};

export const getStateUserInfoArrowBtn = (state) => {
  return state.APP.isUserInfoArrowBtn;
};

export const getStateSideBarArrowBtn = (state) => {
  return state.APP.isSideBarArrowBtn;
};