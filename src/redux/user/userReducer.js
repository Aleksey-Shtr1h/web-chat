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
          userId: nanoid(),

          info: {
            name,
            email,
          },
          photoUrl: "https://firebasestorage.googleapis.com/v0/b/web-chat-1b38f.appspot.com/o/images%2Fuser-unknown-logo%2Fuser-unknown-logo.svg?alt=media&token=c1ddaf10-5e6c-499a-9d51-43892834d130",
          status: {
            state: 'online',
            lastChange: new Date(),
          },
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
    firebase.auth().onAuthStateChanged((user) => {
      checkOnlineFirebase();
      if (user) {
        dispatch(ActionCreatorUser.getUserAuthId(user.uid));
        dispatch(OperationUser.getUserProfile(user.uid));
        dispatch(ActionCreatorUser.getStateOnlineUser(true));
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
        dispatch(ActionCreatorUser.getStateOnlineUser(false));
      })
      .catch(function (error) {
        dispatch(ActionCreatorUser.getStateOnlineUser(true));
        console.log(error.message);
      });
    exitOnlineFirebase(userAuthId);
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
