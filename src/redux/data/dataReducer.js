import { firebase } from '../../utils/firebase.js';
import { nanoid } from 'nanoid';

import { ActionCreatorData, ActionTypeData } from './dataAction.js';
import { ActionCreatorApp } from '../app/appAction.js';

import { addRoomFirebaseUsers, deleteUserRoom } from '../../utils/firebase/firebase-utils.js';

export const initialState = {
  usersRoom: null,
  selectRoom: null,
  messagesList: null,
};

export const OperationData = {

  loadUsers: ({ usersRoom = [], idRoom = `` }, isLoadUser) => (dispatch) => {
    dispatch(ActionCreatorApp.toglleUsersPreload(true));
    const dataBase = firebase.database().ref(`users`);

    dataBase.on(`value`, async (snapshot) => {
      const users = [];
      const usersBase = Object.values(snapshot.val());

      usersRoom.forEach((userId) => {
        const resultFinsUser = usersBase.find((userBase) => {
          return userId === userBase.userId
        });

        if (resultFinsUser) {
          users.push(resultFinsUser);
        } else {
          deleteUserRoom(firebase, idRoom, userId);
        };
      })

      if (isLoadUser) {
        await dispatch(OperationData.loadComment(idRoom, true));
      }
      await dispatch(ActionCreatorData.getUsers(users));
      await dispatch(ActionCreatorApp.toglleUsersPreload(false));
    });
  },

  loadChannel: (idRoom) => (dispatch) => {
    dispatch(ActionCreatorData.getDataSelectRoom(null));
    dispatch(ActionCreatorData.getUsers(null));
    dispatch(ActionCreatorApp.toglleUsersPreload(true));
    dispatch(ActionCreatorApp.toglleMessangesPreload(true));

    const dataBase = firebase.firestore();
    dataBase
      .collection(`rooms`)
      .where("idRoom", "==", idRoom)
      .onSnapshot(async (snapshot) => {
        const dataRoom = snapshot.docs.map((userCommet) => ({
          ...userCommet.data(),
        }));

        await dispatch(ActionCreatorData.getDataSelectRoom(dataRoom[0]));
      })

  },

  createChannel: (nameRoom, adminRoom, usersRoom) => async (dispatch) => {
    const idRoom = nanoid();

    const fireStore = firebase.firestore()
    const refRooms = fireStore.collection(`rooms`).doc(idRoom);

    refRooms.set({
      idRoom,
      info: {
        nameRoom,
        adminRoom,
      },
      usersRoom,
    });

    await dispatch(ActionCreatorApp.toglleModalAddChannel(false));
    addRoomFirebaseUsers(firebase, usersRoom, idRoom, nameRoom);
  },

  ///////////////////////////////////////////
  deleteChannel: () => (dispatch) => { },
  ///////////////////////////////////////////

  loadComment: (idRoom, toglleMessangesPreload) => (dispatch) => {
    const fireStore = firebase.firestore()
    const refRoom = fireStore.collection(`rooms`).doc(idRoom).collection(`messages`).orderBy('timestamp');

    refRoom
      .onSnapshot(async (snapshot) => {
        const messages = snapshot.docs.map((message) => ({
          ...message.data(),
        }));
        await dispatch(ActionCreatorData.getMessagesList(messages));

        if (toglleMessangesPreload) {
          await dispatch(ActionCreatorApp.toglleMessangesPreload(false));
        }
      });
  },

  createComment: (idRoom, message, nameUser, userId) => (dispatch) => {
    const idMessage = nanoid();

    const fireStore = firebase.firestore()
    const refRoom = fireStore.collection(`rooms`).doc(idRoom).collection(`messages`).doc(idMessage);

    refRoom.set({
      idMessage,
      message,
      nameUser,
      userId,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  },

  deleteComment: () => (dispatch) => { },
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeData.GET_USERS:
      return {
        ...state,
        usersRoom: action.payload,
      };

    case ActionTypeData.GET_DATA_SELECT_ROOM:
      return {
        ...state,
        selectRoom: action.payload,
      };

    case ActionTypeData.GET_MESSAGES_LIST:
      return {
        ...state,
        messagesList: action.payload,
      };

    default:
      break;
  }

  return state;
};