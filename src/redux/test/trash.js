import { firebase } from '../../utils/firebase.js';

import { adapterComment } from '../../adapter/comment.js';

const randomNumber = () => {
  return Math.random();
};

// Actions
export const ActionTypeTrash = {
  GET_COMMENTAS: `GET_COMMENTAS`,
  CHANGE_COMMENT_PLACE: `CHANGE_COMMENT_PLACE`,
  ERASE_COMMENT_FORM: `ERASE_COMMENT_FORM`,
};

export const ActionCreatorData = {
  getComments: (commets) => ({
    type: ActionTypeTrash.GET_COMMENTAS,
    payload: commets,
  }),

  actionChangeCommentPlace: (comment) => ({
    type: ActionTypeTrash.CHANGE_COMMENT_PLACE,
    payload: comment,
  }),

  actionEraseCommentForm: () => ({
    type: ActionTypeTrash.ERASE_COMMENT_FORM,
    payload: ``,
  }),
};


// Reducer
export const initialState = {
  comments: [],
  comment: ``,
};

export const OperationTrash = {

  loadComments: () => (dispatch) => {
    const dataBase = firebase.firestore();
    dataBase.collection(`comments`)
      .onSnapshot((snapshot) => {
        const usersCommets = snapshot.docs;
        const newUsersComments = adapterComment(
          usersCommets.map((userCommet) => ({
            ...userCommet.data(),
          })));

        dispatch(ActionCreatorData.getComments(newUsersComments));
      })
  },

  postComments: (description) => (dispatch) => {
    const dateNow = new Date();

    const dataBase = firebase.firestore()
    const refComments = dataBase.collection(`comments`);

    refComments.add({
      description,
      id: randomNumber(),
      name: 'Alex',
      date: dateNow.toISOString(),
    });

    dispatch(ActionCreatorData.actionEraseCommentForm());
  },

  deletePost: (commentId) => (dispatch, getState, api) => {
    const dataBase = firebase.firestore()
    const refComments = dataBase.collection(`comments`);

    refComments.onSnapshot((snapshot) => {
      const usersCommets = snapshot.docs;
      usersCommets.map((userCommet) => {
        if (commentId === userCommet.data().id) {
          refComments.doc(userCommet.id).delete();
        }
        return null;
      });
    })
  }
};




export const trashReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeTrash.GET_COMMENTAS:
      return { ...state, comments: action.payload };

    case ActionTypeTrash.CHANGE_COMMENT_PLACE:
      return { ...state, comment: action.payload };

    case ActionTypeTrash.ERASE_COMMENT_FORM:
      return { ...state, comment: action.payload };

    default:
      break;
  }

  return state;
};