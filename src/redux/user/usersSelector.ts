import { GlobalState } from "../typeState";

export const getUserProfile = (state: GlobalState) => {
  return state.USER.userProfile;
};

export const getStateUserOnline = (state: GlobalState) => {
  return state.USER.isOnline;
};

export const getUserAuthId = (state: GlobalState) => {
  return state.USER.userAuthId;
};
