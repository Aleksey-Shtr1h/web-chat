import { firebase } from "../../utils/firebase.js";
import { nanoid } from "nanoid";

import { ActionTypeUser, ActionCreatorUser } from "./userAction.js";
import { ActionCreatorApp } from "../app/appAction.js";

import {
  checkOnlineFirebase,
  exitOnlineFirebase,
} from "../../utils/firebase/check-online.js";

export const initialState = {
  userProfile: null,
  userAuthId: null,
  isOnline: null,
};

export const OperationUser = {
  userRegistration: (name, email, password) => (dispatch) => {
    dispatch(ActionCreatorUser.getStateOnlineUser(null));
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        checkOnlineFirebase();
        dispatch(ActionCreatorUser.getStateOnlineUser(true));
        return firebase.auth().currentUser.uid;
      })
      .then((userAuthId) => {
        const db = firebase.database().ref("/users/" + userAuthId);

        db.set({
          id: nanoid(),

          info: {
            name,
            email,
          },

          status: {
            state: 'online',
            lastChange: new Date(),
          },

          channelsUser: [1, 2, 3],

          friends: [1, 2, 3,],
        });
      })
      .catch((error) => {
        dispatch(ActionCreatorUser.getStateOnlineUser(false));
        console.log(error.code);
        console.log(error.message);
      });
  },

  userAuth: (email, password) => (dispatch) => {
    dispatch(ActionCreatorUser.getStateOnlineUser(null));
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        checkOnlineFirebase();
      })
      .then(() => {
        dispatch(ActionCreatorUser.getStateOnlineUser(true));
      })
      .catch(function (error) {
        dispatch(ActionCreatorUser.getStateOnlineUser(false));
        console.log(error);
        console.log(error.message);
      });
  },

  userAuthCheck: () => (dispatch) => {
    firebase.auth().onAuthStateChanged(async (user) => {
      checkOnlineFirebase();
      if (user) {
        await dispatch(ActionCreatorUser.getUserAuthId(user.uid));
        await dispatch(OperationUser.getUserProfile(user.uid));
        await dispatch(ActionCreatorUser.getStateOnlineUser(true));
        return;
      }
      dispatch(ActionCreatorUser.getStateOnlineUser(false));
    });
  },

  userExit: (userAuthId) => (dispatch) => {
    dispatch(ActionCreatorUser.getStateOnlineUser(null));
    firebase
      .auth()
      .signOut()
      .then(() => {
        exitOnlineFirebase(userAuthId);
        dispatch(ActionCreatorUser.getStateOnlineUser(false));
      })
      .catch(function (error) {
        dispatch(ActionCreatorUser.getStateOnlineUser(true));
        console.log(error.message);
      });
  },

  getUserProfile: (userAuthId) => (dispatch) => {
    const dataBase = firebase.database().ref(`users`);

    dataBase.on(`value`, async (snapshot) => {
      let userProfile = null;

      snapshot.forEach((user) => {
        if (userAuthId === user.key) {
          userProfile = user.val();
        }
      });

      await dispatch(ActionCreatorUser.getUserProfile(userProfile));
      dispatch(ActionCreatorApp.toglleChannelsPreload(false));
    });
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeUser.USER_AUTH_ID:
      return { ...state, userAuthId: action.payload };

    case ActionTypeUser.STATE_ONLINE_USER:
      return { ...state, isOnline: action.payload };

    case ActionTypeUser.GET_PROFILE_USER:
      return { ...state, userProfile: action.payload };

    default:
      break;
  }

  return state;
};
