import {ActionCreatorData, ActionTypeData} from './dataAction.js';
import firebase from 'firebase';

import {adapterComment} from '../../adapter/comment.js';

const randomNumber = () => {
  return Math.random();
}

export const initialState = {
  comments: [],
  comment: ``,

  users: null,
};

export const OperationData = {

  loadUsers: () => (dispatch, getState, api) => {
    const dataBase = firebase.database().ref(`users`);
    dataBase.on(`value`, async (snapshot) => {
      const users = [];
      await snapshot.forEach((user) => {
        users.push(user.val());
      });
      
      users.sort((a, b) => {
        const u1 = a.status.state === 'online' ? 1 : 0;
        const u2 = b.status.state === 'online' ? 1 : 0;

        return u2 - u1;
      });

      dispatch(ActionCreatorData.getUsers(users));
    });
  },

  loadComments: () => (dispatch, getState, api) => {
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

  postComments: (description) => (dispatch, getState, api) => {
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
      });
    })
  }
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeData.GET_USERS:
      return {
        ...state, 
        users: action.payload,
      };

    case ActionTypeData.GET_COMMENTAS:
      return Object.assign({}, state, {
        comments: action.payload,
      });

    case ActionTypeData.CHANGE_COMMENT_PLACE:
      return Object.assign({}, state, {
        comment: action.payload,
      });

    case ActionTypeData.ERASE_COMMENT_FORM:
      return Object.assign({}, state, {
        comment: action.payload,
      });

    default:
      break;
  }

  return state;
};