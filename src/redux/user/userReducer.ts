import { firebase } from '../../utils/firebase';
import { nanoid } from 'nanoid';

import { ActionCreatorUser } from './userAction';
import { ActionCreatorApp } from '../app/appAction';

import {
  checkOnlineFirebase,
  exitOnlineFirebase,
} from '../../utils/firebase/check-online';

import { ActionTypeUser, UserActionInterface, UserProfileInterface, UserState } from './typesUser';
import { Dispatch } from 'react';
import { GlobalActionInterface } from '../typeState';

export const initialState: UserState = {
  userProfile: null,
  userAuthId: null,
  isOnline: null,
};

export const OperationUser: any = {
  userRegistration: (name: string, email: string, password: string) => (dispatch: Dispatch<GlobalActionInterface>) => {
    dispatch(ActionCreatorUser.getStateOnlineUser(null));
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((): string | undefined => {
        checkOnlineFirebase();
        dispatch(ActionCreatorUser.getStateOnlineUser(true));
        return firebase.auth().currentUser?.uid;
      })
      .then((userAuthId: string | undefined) => {
        const db = firebase.database().ref('/users/' + userAuthId);

        db.set({
          userId: nanoid(),

          info: {
            name,
            email,
          },
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/web-chat-1b38f.appspot.com/o/images%2Fuser-unknown-logo%2Fuser-unknown-logo.svg?alt=media&token=c1ddaf10-5e6c-499a-9d51-43892834d130',
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

  userAuth: (email: string, password: string) => (dispatch: Dispatch<GlobalActionInterface>) => {
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

  userAuthCheck: () => (dispatch: Dispatch<GlobalActionInterface>) => {
    firebase.auth().onAuthStateChanged((user) => {
      checkOnlineFirebase();
      if (user) {
        dispatch(ActionCreatorUser.getUserAuthId(user.uid));
        dispatch(OperationUser.getUserProfile(user.uid));
        dispatch(ActionCreatorUser.getStateOnlineUser(true));
        return null;
      }
      dispatch(ActionCreatorUser.getStateOnlineUser(false));
    });
  },

  userExit: (userAuthId: string) => (dispatch: Dispatch<GlobalActionInterface>) => {
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

  getUserProfile: (userAuthId: string) => (dispatch: Dispatch<GlobalActionInterface>) => {
    const dataBase = firebase.database().ref(`users`);

    dataBase.on(`value`, async (snapshot) => {
      let userProfile: null | UserProfileInterface = null;

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

export const userReducer = (state = initialState, action: UserActionInterface): UserState => {
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
