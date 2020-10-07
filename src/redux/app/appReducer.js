import {ActionTypeApp} from './appAction.js';

export const initialState = {
  isBurgerBtn: false,
};

export const OperationApp = {

};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeApp.IS_BURGER_BTN:
      return { ...state, isBurgerBtn: action.payload}

    default:
      break;
  }

  return state;
};