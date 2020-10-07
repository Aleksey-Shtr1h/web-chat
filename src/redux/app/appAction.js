export const ActionTypeApp = {
  IS_BURGER_BTN: `IS_BURGER_BTN`,
};

export const ActionCreatorApp = {
  changeBurgerBtn: (isBurgerBtn) => {
    return {
      type: ActionTypeApp.IS_BURGER_BTN,
      payload: isBurgerBtn,
    };
  },
};