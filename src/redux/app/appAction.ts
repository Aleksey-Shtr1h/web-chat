import { ActionTypeApp, CHANNEL_ID_MOUSE_ENTER, FRIENDS_ACTIVE_NAME, IS_BURGER_BTN, IS_MODAL_ADD_CHANNEL, IS_MODAL_EDIT_USER_DATA, IS_SIDE_BAR_ARROW_BTN, IS_SUBSCRIBED_USER, IS_USER_INFO_ARROW_BTN, PRELOAD_CHANNEL, PRELOAD_MESSANGES, PRELOAD_USERS } from "./typesApp";

export const ActionCreatorApp = {
  changeBurgerBtn: (isBurgerBtn: boolean): IS_BURGER_BTN => ({
    type: ActionTypeApp.IS_BURGER_BTN,
    payload: isBurgerBtn,
  }),

  changeFriendsName: (name: string): FRIENDS_ACTIVE_NAME => ({
    type: ActionTypeApp.FRIENDS_ACTIVE_NAME,
    payload: name,
  }),

  toglleUsersPreload: (isTogglePreload: boolean): PRELOAD_USERS => ({
    type: ActionTypeApp.PRELOAD_USERS,
    payload: isTogglePreload,
  }),

  toglleChannelsPreload: (isTogglePreload: boolean): PRELOAD_CHANNEL => ({
    type: ActionTypeApp.PRELOAD_CHANNEL,
    payload: isTogglePreload,
  }),

  toglleMessangesPreload: (isTogglePreload: boolean): PRELOAD_MESSANGES => ({
    type: ActionTypeApp.PRELOAD_MESSANGES,
    payload: isTogglePreload,
  }),

  toglleModalAddChannel: (isToggleShow: boolean): IS_MODAL_ADD_CHANNEL => ({
    type: ActionTypeApp.IS_MODAL_ADD_CHANNEL,
    payload: isToggleShow,
  }),

  changeChannelId: (idChannel: string): CHANNEL_ID_MOUSE_ENTER => ({
    type: ActionTypeApp.CHANNEL_ID_MOUSE_ENTER,
    payload: idChannel,
  }),

  changeSubribedUser: (isSubscribedUser: boolean): IS_SUBSCRIBED_USER => ({
    type: ActionTypeApp.IS_SUBSCRIBED_USER,
    payload: isSubscribedUser,
  }),

  toglleModalEditUserForm: (isToggleShow: boolean): IS_MODAL_EDIT_USER_DATA => ({
    type: ActionTypeApp.IS_MODAL_EDIT_USER_DATA,
    payload: isToggleShow,
  }),

  toglleUserInfoArrowBtn: (isToggleShow: boolean): IS_USER_INFO_ARROW_BTN => ({
    type: ActionTypeApp.IS_USER_INFO_ARROW_BTN,
    payload: isToggleShow,
  }),

  toglleSideBarArrowBtn: (isToggleShow: boolean): IS_SIDE_BAR_ARROW_BTN => ({
    type: ActionTypeApp.IS_SIDE_BAR_ARROW_BTN,
    payload: isToggleShow,
  }),
};
