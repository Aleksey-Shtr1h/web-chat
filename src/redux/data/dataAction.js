export const ActionTypeData = {
  GET_COMMENTAS: `GET_COMMENTAS`,
  CHANGE_COMMENT_PLACE: `CHANGE_COMMENT_PLACE`,
};

export const ActionCreatorData = {
  getComments: (commets) => {
    return {
      type: ActionTypeData.GET_COMMENTAS,
      payload: commets,
    };
  },

  actionChangeCommentPlace: (comment) => ({
    type: ActionTypeData.CHANGE_COMMENT_PLACE,
    payload: comment,
  }),
};