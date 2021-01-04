export const ActionTypeApp = {
  IS_BURGER_BTN: `IS_BURGER_BTN`,
  IS_MODAL_ADD_CHANNEL: `IS_MODAL_ADD_CHANNEL`,
  FRIENDS_ACTIVE_NAME: `FRIENDS_ACTIVE_NAME`,
  PRELOAD_USERS: `PRELOAD_USERS`,
  PRELOAD_CHANNEL: `PRELOAD_CHANNEL`,
  PRELOAD_MESSANGES: `PRELOAD_MESSANGES`,
  CHANNEL_ID_MOUSE_ENTER: `CHANNEL_ID_MOUSE_ENTER`,
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
  })
};