import firebase from 'firebase';
import {ActionTypeUser, ActionCreatorUser} from './userAction.js';

import {checkOnlineFirebase, exitOnlineFirebase} from '../../utils/firebase/check-online.js';

export const initialState = {
  userId: ``,
  isOnline: null,
};

export const OperationUser = {

  userRegistration: (name, email, password) => (dispatch, getState) => {
    dispatch(ActionCreatorUser.getStateOnlineUser(null));
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      checkOnlineFirebase();
      dispatch(ActionCreatorUser.getStateOnlineUser(true));
      return firebase.auth().currentUser.uid;
    })
    .then((userId) => {
      const db = firebase.database().ref('/users/' + userId);

      db.set({
        info: {
          name,
        },
        status: {
          state: 'offline',
        }
      });
    })
    .catch((error) => {
      dispatch(ActionCreatorUser.getStateOnlineUser(false));
      console.log(error.code);
      console.log(error.message);
    });

  },

  userAuth: (email, password) => (dispatch, getState) => {
    dispatch(ActionCreatorUser.getStateOnlineUser(null));
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      checkOnlineFirebase();
    })
    .then(() => {
      dispatch(ActionCreatorUser.getStateOnlineUser(true));
    })
    .catch(function(error) {
      dispatch(ActionCreatorUser.getStateOnlineUser(false));
      console.log(error);
      console.log(error.message);
    });

  },

  userAuthCheck: () => (dispatch, getState) => {
    firebase.auth().onAuthStateChanged((user) => {
      checkOnlineFirebase();
      if (user) {
        dispatch(ActionCreatorUser.getUserId(user.uid));
        dispatch(ActionCreatorUser.getStateOnlineUser(true));
        return;
      }
      dispatch(ActionCreatorUser.getStateOnlineUser(false));
    });
  },

  userExit: (userId) => (dispatch, getState) => {
    dispatch(ActionCreatorUser.getStateOnlineUser(null));
    firebase.auth().signOut()
    .then(() => {
      exitOnlineFirebase(userId);
      dispatch(ActionCreatorUser.getStateOnlineUser(false));
    }).catch(function(error) {
      dispatch(ActionCreatorUser.getStateOnlineUser(true));
      console.log(error.message);
    });
  }, 

};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeUser.USER_ID:
      return { ...state, userId: action.payload}

    case ActionTypeUser.STATE_ONLINE_USER:
      return { ...state, isOnline: action.payload}

    default:
      break;
  }

  return state;
};