import { ActionTypeApp } from "./typesApp";

export const ActionCreatorApp = {
  changeBurgerBtn: (isBurgerBtn: boolean) => ({
    type: ActionTypeApp.IS_BURGER_BTN,
    payload: isBurgerBtn,
  }),

  changeFriendsName: (name: string) => ({
    type: ActionTypeApp.FRIENDS_ACTIVE_NAME,
    payload: name,
  }),

  toglleUsersPreload: (isTogglePreload: boolean) => ({
    type: ActionTypeApp.PRELOAD_USERS,
    payload: isTogglePreload,
  }),

  toglleChannelsPreload: (isTogglePreload: boolean) => ({
    type: ActionTypeApp.PRELOAD_CHANNEL,
    payload: isTogglePreload,
  }),

  toglleMessangesPreload: (isTogglePreload: boolean) => ({
    type: ActionTypeApp.PRELOAD_MESSANGES,
    payload: isTogglePreload,
  }),

  toglleModalAddChannel: (isToggleShow: boolean) => ({
    type: ActionTypeApp.IS_MODAL_ADD_CHANNEL,
    payload: isToggleShow,
  }),

  changeChannelId: (idChannel: string) => ({
    type: ActionTypeApp.CHANNEL_ID_MOUSE_ENTER,
    payload: idChannel,
  }),

  changeSubribedUser: (isSubscribedUser: boolean) => ({
    type: ActionTypeApp.IS_SUBSCRIBED_USER,
    payload: isSubscribedUser,
  }),

  toglleModalEditUserForm: (isToggleShow: boolean) => ({
    type: ActionTypeApp.IS_MODAL_EDIT_USER_DATA,
    payload: isToggleShow,
  }),

  toglleUserInfoArrowBtn: (isToggleShow: boolean) => ({
    type: ActionTypeApp.IS_USER_INFO_ARROW_BTN,
    payload: isToggleShow,
  }),

  toglleSideBarArrowBtn: (isToggleShow: boolean) => ({
    type: ActionTypeApp.IS_SIDE_BAR_ARROW_BTN,
    payload: isToggleShow,
  }),
};
