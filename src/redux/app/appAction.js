export const ActionTypeApp = {
  IS_BURGER_BTN: `APP/IS_BURGER_BTN`,
  IS_MODAL_ADD_CHANNEL: `APP/IS_MODAL_ADD_CHANNEL`,
  IS_SUBSCRIBED_USER: `APP/IS_SUBSCRIBED_USER`,
  FRIENDS_ACTIVE_NAME: `APP/FRIENDS_ACTIVE_NAME`,
  PRELOAD_USERS: `APP/PRELOAD_USERS`,
  PRELOAD_CHANNEL: `APP/PRELOAD_CHANNEL`,
  PRELOAD_MESSANGES: `APP/PRELOAD_MESSANGES`,
  CHANNEL_ID_MOUSE_ENTER: `APP/CHANNEL_ID_MOUSE_ENTER`,
  IS_MODAL_EDIT_USER_DATA: `APP/IS_MODAL_EDIT_USER_DATA`,
  IS_USER_INFO_ARROW_BTN: `APP/IS_USER_INFO_ARROW_BTN`,
  IS_SIDE_BAR_ARROW_BTN: `APP/IS_SIDE_BAR_ARROW_BTN`,
};

export const ActionCreatorApp = {
  changeBurgerBtn: (isBurgerBtn) => ({
    type: ActionTypeApp.IS_BURGER_BTN,
    payload: isBurgerBtn,
  }),

  changeFriendsName: (name) => ({
    type: ActionTypeApp.FRIENDS_ACTIVE_NAME,
    payload: name,
  }),

  toglleUsersPreload: (isTogglePreload) => ({
    type: ActionTypeApp.PRELOAD_USERS,
    payload: isTogglePreload,
  }),

  toglleChannelsPreload: (isTogglePreload) => ({
    type: ActionTypeApp.PRELOAD_CHANNEL,
    payload: isTogglePreload,
  }),

  toglleMessangesPreload: (isTogglePreload) => ({
    type: ActionTypeApp.PRELOAD_MESSANGES,
    payload: isTogglePreload,
  }),

  toglleModalAddChannel: (isToggleShow) => ({
    type: ActionTypeApp.IS_MODAL_ADD_CHANNEL,
    payload: isToggleShow,
  }),

  changeChannelId: (idChannel) => ({
    type: ActionTypeApp.CHANNEL_ID_MOUSE_ENTER,
    payload: idChannel,
  }),

  changeSubribedUser: (isSubscribedUser) => ({
    type: ActionTypeApp.IS_SUBSCRIBED_USER,
    payload: isSubscribedUser,
  }),

  toglleModalEditUserForm: (isToggleShow) => ({
    type: ActionTypeApp.IS_MODAL_EDIT_USER_DATA,
    payload: isToggleShow,
  }),

  toglleUserInfoArrowBtn: (isToggleShow) => ({
    type: ActionTypeApp.IS_USER_INFO_ARROW_BTN,
    payload: isToggleShow,
  }),

  toglleSideBarArrowBtn: (isToggleShow) => ({
    type: ActionTypeApp.IS_SIDE_BAR_ARROW_BTN,
    payload: isToggleShow,
  })
};
