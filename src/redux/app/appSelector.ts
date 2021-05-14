import { GlobalState } from "../typeState";

export const getTogglePreloadUsers = (state: GlobalState) => {
  return state.APP.isPreloadUsers;
};

export const getTogglePreloadChannels = (state: GlobalState) => {
  return state.APP.isPreloadChannels;
};

export const getTogglePreloadMessanges = (state: GlobalState) => {
  return state.APP.isPreloadMessanges;
};

export const getStateModalAddChannel = (state: GlobalState) => {
  return state.APP.isModalChannelAdd;
};

export const getStateBurgerBtn = (state: GlobalState) => {
  return state.APP.isBurgerBtn;
};

export const getFriendsActiveName = (state: GlobalState) => {
  return state.APP.friendsActiveName;
};

export const getSubscribedUser = (state: GlobalState) => {
  return state.APP.isSubscribedUser;
};

export const getStateEditUserDate = (state: GlobalState) => {
  return state.APP.isEditUserData;
};

export const getStateUserInfoArrowBtn = (state: GlobalState) => {
  return state.APP.isUserInfoArrowBtn;
};

export const getStateSideBarArrowBtn = (state: GlobalState) => {
  return state.APP.isSideBarArrowBtn;
};
