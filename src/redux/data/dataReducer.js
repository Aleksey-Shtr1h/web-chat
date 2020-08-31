import {ActionCreatorData, ActionTypeData} from './dataAction.js';
import firebase from 'firebase';

const initialState = {
  comments: {},
  comment: ``,
};

export const OperationData = {

  loadComments: () => (dispatch, getState, api) => {
    const dataBase = firebase.database();
    const refComments = dataBase.ref('comments');

    refComments.once('value')
    .then((snapshot) => {
      return snapshot.val();
    })
    .then((response) => {
      dispatch(ActionCreatorData.getComments(response));
    });
  },

  postComments: (comment) => (dispatch, getState, api) => {
    const lengthComments = getState().DATA.comments;

    const dataBase = firebase.database()
    const refComments = dataBase.ref('comments');
    const autiId = refComments.push().key;

    const refOparationChange = lengthComments !== null ? refComments.child(autiId) : dataBase.ref('/comments/' + autiId);

    refOparationChange.set({
      comment: comment,
      id: 1,
      name: 'Alex',
    })
    .then((response) => {
      dispatch(OperationData.loadComments());
    });
  }

};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeData.GET_COMMENTAS:
      return Object.assign({}, state, {
        comments: action.payload,
      });

    case ActionTypeData.CHANGE_COMMENT_PLACE:
      return Object.assign({}, state, {
        comment: action.payload,
      });
  }

  return state;
};