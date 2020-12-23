export const ActionTypeData = {
  GET_USERS: `GET_USERS`,
};

export const ActionCreatorData = {

  getUsers: (users) => ({
    type: ActionTypeData.GET_USERS,
    payload: users,
  }),

};