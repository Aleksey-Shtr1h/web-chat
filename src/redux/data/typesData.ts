import { UserProfileInterface } from "../user/typesUser";

export interface LoadUsersRoomInterface {
  idRoom: string;

  info: {
    adminRoom: [string];
    nameRoom: string;
  };

  usersRoom: [string];
}

export interface LoadMessagesListInterface {
  idMessage: string;
  message: string;
  nameUser: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  }
  userId: string;
}

export interface DataState {
  usersRoom: null | UserProfileInterface[] | [];
  selectRoom: null | LoadUsersRoomInterface;
  messagesList: null | LoadMessagesListInterface[];
}

export enum ActionTypeData {
  GET_USERS = `DATA/GET_USERS`,
  GET_DATA_SELECT_ROOM = `DATA/GET_DATA_SELECT_ROOM`,
  GET_MESSAGES_LIST = `DATA/GET_MESSAGES_LIST`,
}

export interface GET_USERS {
  type: ActionTypeData.GET_USERS;
  payload: null | UserProfileInterface[] | [];
}
export interface GET_DATA_SELECT_ROOM {
  type: ActionTypeData.GET_DATA_SELECT_ROOM;
  payload: LoadUsersRoomInterface | null;
}
export interface GET_MESSAGES_LIST {
  type: ActionTypeData.GET_MESSAGES_LIST;
  payload: LoadMessagesListInterface[] | null;
}

export type DataActionInterface = GET_USERS | GET_DATA_SELECT_ROOM | GET_MESSAGES_LIST;