export interface UserState {
  userProfile: null | object,
  userAuthId: null | string,
  isOnline: null | boolean,
}

export enum ActionTypeUser {
  USER_AUTH_ID = `USER/USER_AUTH_ID`,
  STATE_ONLINE_USER = `USER/STATE_ONLINE_USER`,
  GET_PROFILE_USER = `USER/GET_PROFILE_USER`,
};

interface USER_AUTH_ID {
  type: ActionTypeUser.USER_AUTH_ID;
  payload: null | string;
};
interface STATE_ONLINE_USER {
  type: ActionTypeUser.STATE_ONLINE_USER;
  payload: null | boolean;
};
interface GET_PROFILE_USER {
  type: ActionTypeUser.GET_PROFILE_USER;
  payload: null | object;
};

export type UserActionInterface = USER_AUTH_ID | STATE_ONLINE_USER | GET_PROFILE_USER;

export interface OperationUserInterface {
  userRegistration: (name: string, email: string, password: string) => (dispatch: any) => void;
  userAuth: (email: string, password: string) => (dispatch: any) => void;
  userAuthCheck: () => (dispatch: any) => void;
  userExit: (userAuthId: string) => (dispatch: any) => void;
  getUserProfile: (userAuthId: string) => (dispatch: any) => void;
}