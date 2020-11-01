export const ActionTypeData = {
  GET_COMMENTAS: `GET_COMMENTAS`,
  CHANGE_COMMENT_PLACE: `CHANGE_COMMENT_PLACE`,
  ERASE_COMMENT_FORM: `ERASE_COMMENT_FORM`,

  GET_USERS: `GET_USERS`,
};

export const ActionCreatorData = {
  
  getUsers: (users) => ({
    type: ActionTypeData.GET_USERS,
    payload: users,
  }),

  getComments: (commets) => ({
    type: ActionTypeData.GET_COMMENTAS,
    payload: commets,
  }),

  actionChangeCommentPlace: (comment) => ({
    type: ActionTypeData.CHANGE_COMMENT_PLACE,
    payload: comment,
  }),

  actionEraseCommentForm: () => ({
    type: ActionTypeData.ERASE_COMMENT_FORM,
    payload: ``,
  }),
};