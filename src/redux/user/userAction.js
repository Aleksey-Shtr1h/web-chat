export const ActionTypeUser = {
  USER_ID: `USER_ID`,
  STATE_ONLINE_USER: `STATE_ONLINE_USER`,
};

export const ActionCreatorUser = {
  getUserId: (id) => {
    return {
      type: ActionTypeUser.USER_ID,
      payload: id,
    };
  },

  getStateOnlineUser: (isOnline) => {
    return {
      type: ActionTypeUser.STATE_ONLINE_USER,
      payload: isOnline,
    };
  },

};