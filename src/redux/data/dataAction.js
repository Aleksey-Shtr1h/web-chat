export const ActionTypeData = {
  GET_USERS: `DATA/GET_USERS`,
  GET_DATA_SELECT_ROOM: `DATA/GET_DATA_SELECT_ROOM`,
  GET_MESSAGES_LIST: `DATA/GET_MESSAGES_LIST`,
};

export const ActionCreatorData = {

  getUsers: (users) => ({
    type: ActionTypeData.GET_USERS,
    payload: users,
  }),

  getDataSelectRoom: (dataRoom) => ({
    type: ActionTypeData.GET_DATA_SELECT_ROOM,
    payload: dataRoom,
  }),

  getMessagesList: (messages) => ({
    type: ActionTypeData.GET_MESSAGES_LIST,
    payload: messages,
  }),

};