export const ActionTypeUser = {
  USER_AUTH_ID: `USER_AUTH_ID`,
  STATE_ONLINE_USER: `STATE_ONLINE_USER`,
  GET_PROFILE_USER: `GET_PROFILE_USER`,
};

export const ActionCreatorUser = {
  getUserAuthId: (authId) => ({
    type: ActionTypeUser.USER_AUTH_ID,
    payload: authId,
  }),

  getStateOnlineUser: (isOnline) => ({
    type: ActionTypeUser.STATE_ONLINE_USER,
    payload: isOnline,
  }),

  getUserProfile: (userProfile) => ({
    type: ActionTypeUser.GET_PROFILE_USER,
    payload: userProfile,
  }),

};