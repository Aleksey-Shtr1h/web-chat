export const ActionTypeApp = {
  IS_BURGER_BTN: `IS_BURGER_BTN`,
  FRIENDS_ACTIVE_NAME: `FRIENDS_ACTIVE_NAME`,
};

export const ActionCreatorApp = {
  changeBurgerBtn: (isBurgerBtn) => {
    return {
      type: ActionTypeApp.IS_BURGER_BTN,
      payload: isBurgerBtn,
    };
  },

  changeFriendsName: (name) => {
    return {
      type: ActionTypeApp.FRIENDS_ACTIVE_NAME,
      payload: name,
    };
  },
};