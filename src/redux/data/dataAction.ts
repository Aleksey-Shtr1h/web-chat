import { UserProfileInterface } from "../user/typesUser";
import { ActionTypeData, GET_DATA_SELECT_ROOM, GET_MESSAGES_LIST, GET_USERS, LoadMessagesListInterface, LoadUsersRoomInterface } from "./typesData";

export const ActionCreatorData = {
  getUsers: (users: null | UserProfileInterface[] | []): GET_USERS => ({
    type: ActionTypeData.GET_USERS,
    payload: users,
  }),

  getDataSelectRoom: (dataRoom: null | LoadUsersRoomInterface): GET_DATA_SELECT_ROOM => ({
    type: ActionTypeData.GET_DATA_SELECT_ROOM,
    payload: dataRoom,
  }),

  getMessagesList: (messages: null | LoadMessagesListInterface[]): GET_MESSAGES_LIST => ({
    type: ActionTypeData.GET_MESSAGES_LIST,
    payload: messages,
  }),
};
