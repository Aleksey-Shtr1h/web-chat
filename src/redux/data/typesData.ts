export interface DataState {
  usersRoom: null | any[];
  selectRoom: null | object;
  messagesList: null | any[];
}

export enum ActionTypeData {
  GET_USERS = `DATA/GET_USERS`,
  GET_DATA_SELECT_ROOM = `DATA/GET_DATA_SELECT_ROOM`,
  GET_MESSAGES_LIST = `DATA/GET_MESSAGES_LIST`,
};

interface GET_USERS {
  type: ActionTypeData.GET_USERS;
  payload: any[] | null;
};
interface GET_DATA_SELECT_ROOM {
  type: ActionTypeData.GET_DATA_SELECT_ROOM;
  payload: object | null;
};
interface GET_MESSAGES_LIST {
  type: ActionTypeData.GET_MESSAGES_LIST;
  payload: any[] | null;
};

export type DataActionInterface = GET_USERS | GET_DATA_SELECT_ROOM | GET_MESSAGES_LIST;