export interface AppState {
  isPreloadUsers: boolean;
  isPreloadChannels: boolean;
  isPreloadMessanges: boolean;
  isBurgerBtn: boolean;
  isModalChannelAdd: boolean;
  isSubscribedUser: boolean;
  isEditUserData: boolean;
  friendsActiveName: string;
  idChannel: null | string;
  isUserInfoArrowBtn: boolean;
  isSideBarArrowBtn: boolean;
}


export enum ActionTypeApp {
  IS_BURGER_BTN = `APP/IS_BURGER_BTN`,
  IS_MODAL_ADD_CHANNEL = `APP/IS_MODAL_ADD_CHANNEL`,
  IS_SUBSCRIBED_USER = `APP/IS_SUBSCRIBED_USER`,
  FRIENDS_ACTIVE_NAME = `APP/FRIENDS_ACTIVE_NAME`,
  PRELOAD_USERS = `APP/PRELOAD_USERS`,
  PRELOAD_CHANNEL = `APP/PRELOAD_CHANNEL`,
  PRELOAD_MESSANGES = `APP/PRELOAD_MESSANGES`,
  CHANNEL_ID_MOUSE_ENTER = `APP/CHANNEL_ID_MOUSE_ENTER`,
  IS_MODAL_EDIT_USER_DATA = `APP/IS_MODAL_EDIT_USER_DATA`,
  IS_USER_INFO_ARROW_BTN = `APP/IS_USER_INFO_ARROW_BTN`,
  IS_SIDE_BAR_ARROW_BTN = `APP/IS_SIDE_BAR_ARROW_BTN`,
}

export interface IS_BURGER_BTN {
  type: ActionTypeApp.IS_BURGER_BTN;
  payload: boolean;
}
export interface IS_MODAL_ADD_CHANNEL {
  type: ActionTypeApp.IS_MODAL_ADD_CHANNEL;
  payload: boolean;
}
export interface IS_SUBSCRIBED_USER {
  type: ActionTypeApp.IS_SUBSCRIBED_USER;
  payload: boolean;
}
export interface FRIENDS_ACTIVE_NAME {
  type: ActionTypeApp.FRIENDS_ACTIVE_NAME;
  payload: string;
}
export interface PRELOAD_USERS {
  type: ActionTypeApp.PRELOAD_USERS;
  payload: boolean;
}
export interface PRELOAD_CHANNEL {
  type: ActionTypeApp.PRELOAD_CHANNEL;
  payload: boolean;
}
export interface PRELOAD_MESSANGES {
  type: ActionTypeApp.PRELOAD_MESSANGES;
  payload: boolean;
}
export interface CHANNEL_ID_MOUSE_ENTER {
  type: ActionTypeApp.CHANNEL_ID_MOUSE_ENTER;
  payload: string | null;
}
export interface IS_MODAL_EDIT_USER_DATA {
  type: ActionTypeApp.IS_MODAL_EDIT_USER_DATA;
  payload: boolean;
}
export interface IS_USER_INFO_ARROW_BTN {
  type: ActionTypeApp.IS_USER_INFO_ARROW_BTN;
  payload: boolean;
}
export interface IS_SIDE_BAR_ARROW_BTN {
  type: ActionTypeApp.IS_SIDE_BAR_ARROW_BTN;
  payload: boolean;
}

export type AppActionInterface = IS_SIDE_BAR_ARROW_BTN | IS_MODAL_ADD_CHANNEL | IS_SUBSCRIBED_USER | FRIENDS_ACTIVE_NAME | PRELOAD_USERS | PRELOAD_CHANNEL | PRELOAD_MESSANGES | CHANNEL_ID_MOUSE_ENTER | IS_MODAL_EDIT_USER_DATA | IS_USER_INFO_ARROW_BTN | IS_BURGER_BTN;
