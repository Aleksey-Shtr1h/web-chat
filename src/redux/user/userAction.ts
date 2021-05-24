import { ActionTypeUser, USER_AUTH_ID, STATE_ONLINE_USER, GET_PROFILE_USER, UserProfileInterface } from "./typesUser";

export const ActionCreatorUser = {
  getUserAuthId: (authId: string): USER_AUTH_ID => ({
    type: ActionTypeUser.USER_AUTH_ID,
    payload: authId,
  }),

  getStateOnlineUser: (isOnline: boolean | null): STATE_ONLINE_USER => ({
    type: ActionTypeUser.STATE_ONLINE_USER,
    payload: isOnline,
  }),

  getUserProfile: (userProfile: UserProfileInterface | null): GET_PROFILE_USER => ({
    type: ActionTypeUser.GET_PROFILE_USER,
    payload: userProfile,
  }),
};

