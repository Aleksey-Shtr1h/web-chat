import { ActionCreatorApp, ActionTypeApp } from './appAction.js';

export const initialState = {
  isPreloadUsers: true,
  isPreloadChannels: true,
  isPreloadMessanges: true,
  isBurgerBtn: false,
  isModalChannelAdd: false,
  isSubscribedUser: false,
  isEditUserData: false,
  friendsActiveName: '',
  idChannel: null,
  isUserInfoArrowBtn: false,
  isSideBarArrowBtn: true,
};

export const OperationApp = {
  checkSubscribedUser: (usersRoom, userId) => (dispatch) => {
    const isSubscribedUser = usersRoom.includes(userId);
    dispatch(ActionCreatorApp.changeSubribedUser(isSubscribedUser));
  }
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeApp.IS_BURGER_BTN:
      return { ...state, isBurgerBtn: action.payload }

    case ActionTypeApp.FRIENDS_ACTIVE_NAME:
      return { ...state, friendsActiveName: action.payload }

    case ActionTypeApp.PRELOAD_CHANNEL:
      return { ...state, isPreloadChannels: action.payload }

    case ActionTypeApp.PRELOAD_USERS:
      return { ...state, isPreloadUsers: action.payload }

    case ActionTypeApp.PRELOAD_MESSANGES:
      return { ...state, isPreloadMessanges: action.payload }

    case ActionTypeApp.CHANNEL_ID_MOUSE_ENTER:
      return { ...state, idChannel: action.payload }

    case ActionTypeApp.IS_MODAL_ADD_CHANNEL:
      return { ...state, isModalChannelAdd: action.payload }

    case ActionTypeApp.IS_SUBSCRIBED_USER:
      return { ...state, isSubscribedUser: action.payload }

    case ActionTypeApp.IS_MODAL_EDIT_USER_DATA:
      return { ...state, isEditUserData: action.payload }

    case ActionTypeApp.IS_USER_INFO_ARROW_BTN:
      return { ...state, isUserInfoArrowBtn: action.payload }

    case ActionTypeApp.IS_SIDE_BAR_ARROW_BTN:
      return { ...state, isSideBarArrowBtn: action.payload }

    default:
      break;
  }

  return state;
};