import { ActionTypeData } from "./typesData";

export const ActionCreatorData = {
  getUsers: (users: any[] | null) => ({
    type: ActionTypeData.GET_USERS,
    payload: users,
  }),

  getDataSelectRoom: (dataRoom: object | null) => ({
    type: ActionTypeData.GET_DATA_SELECT_ROOM,
    payload: dataRoom,
  }),

  getMessagesList: (messages: any[] | null) => ({
    type: ActionTypeData.GET_MESSAGES_LIST,
    payload: messages,
  }),
};
