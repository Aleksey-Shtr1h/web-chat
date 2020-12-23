export const ActionTypeTemplate = {
  TEST: `TEST`,
};

export const ActionCreatorTemplate = {
  getTemplate: () => ({
    type: ActionTypeTemplate.TEST,
    payload: 1,
  }),
};