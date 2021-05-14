import { ActionTypeUser } from "./typesUser";

export const ActionCreatorUser = {
  getUserAuthId: (authId: string) => ({
    type: ActionTypeUser.USER_AUTH_ID,
    payload: authId,
  }),

  getStateOnlineUser: (isOnline: boolean | null) => ({
    type: ActionTypeUser.STATE_ONLINE_USER,
    payload: isOnline,
  }),

  getUserProfile: (userProfile: object | null) => ({
    type: ActionTypeUser.GET_PROFILE_USER,
    payload: userProfile,
  }),
};
