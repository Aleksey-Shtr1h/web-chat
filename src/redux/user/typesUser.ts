import { Dispatch } from "react";
import { GlobalActionInterface } from "../typeState";

export interface UserProfileInterface {
  userId: string;

  info: {
    name: string;
    email: string;
  },

  photoUrl: string;

  status: {
    state: string;
    lastChange: number;
  },

  channelsUser?: {
    idRoom: string;
    nameRoom: string;
  };

  sosialNetworks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkendin?: string;
  };

  statusDiscription?: string;
}

export interface UserState {
  userProfile: null | UserProfileInterface,
  userAuthId: null | string,
  isOnline: null | boolean,
}

export enum ActionTypeUser {
  USER_AUTH_ID = `USER/USER_AUTH_ID`,
  STATE_ONLINE_USER = `USER/STATE_ONLINE_USER`,
  GET_PROFILE_USER = `USER/GET_PROFILE_USER`,
}

export interface USER_AUTH_ID {
  type: ActionTypeUser.USER_AUTH_ID;
  payload: null | string;
}

export interface STATE_ONLINE_USER {
  type: ActionTypeUser.STATE_ONLINE_USER;
  payload: null | boolean;
}
export interface GET_PROFILE_USER {
  type: ActionTypeUser.GET_PROFILE_USER;
  payload: null | UserProfileInterface;
}

export type UserActionInterface = USER_AUTH_ID | STATE_ONLINE_USER | GET_PROFILE_USER;

export interface OperationUserInterface {
  userRegistration: (name: string, email: string, password: string) => (dispatch: Dispatch<GlobalActionInterface>) => void;

  userAuth: (email: string, password: string) => (dispatch: Dispatch<GlobalActionInterface>) => void;

  userAuthCheck: () => (dispatch: Dispatch<GlobalActionInterface>) => void;

  userExit: (userAuthId: string) => (dispatch: Dispatch<GlobalActionInterface>) => void;

  getUserProfile: (userAuthId: string) => (dispatch: Dispatch<GlobalActionInterface>) => void;
}