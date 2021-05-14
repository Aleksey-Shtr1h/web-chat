import { firebase } from '../../utils/firebase';
import { nanoid } from 'nanoid';

import { ActionCreatorData } from './dataAction';
import { ActionCreatorApp } from '../app/appAction';

import {
  addRoomFirebaseUsers,
  deleteUserRoom,
  checkDoubleDate,
} from '../../utils/firebase/firebase-utils';
import { ActionTypeData, DataActionInterface, DataState } from './typesData';

export const initialState: DataState = {
  usersRoom: null,
  selectRoom: null,
  messagesList: null,
};

export const OperationData = {
  loadUsers: ({ usersRoom = [], idRoom = `` }, isLoadUser: boolean) => (dispatch: any): void => {
    dispatch(ActionCreatorApp.toglleUsersPreload(true));
    const dataBase = firebase.database().ref(`users`);

    dataBase.on(`value`, async (snapshot) => {
      const users: any[] = [];
      const usersBase: any[] = Object.values(snapshot.val());

      interface UserBase {
        userId: string | object;
      }

      usersRoom.forEach((userId: object) => {
        const resultFinsUser = usersBase.find((userBase: UserBase) => {
          return userId === userBase.userId;
        });

        if (resultFinsUser) {
          users.push(resultFinsUser);
        } else {
          deleteUserRoom(firebase, idRoom, userId);
        }

        if (usersRoom.length > 0) {
          checkDoubleDate(firebase, idRoom, usersRoom);
        }
      });

      if (isLoadUser) {
        await dispatch(OperationData.loadComment(idRoom, true));
      }
      await dispatch(ActionCreatorData.getUsers(users));
      await dispatch(ActionCreatorApp.toglleUsersPreload(false));
    });
  },

  loadChannel: (idRoom: string) => (dispatch: any): void => {
    dispatch(ActionCreatorData.getDataSelectRoom(null));
    dispatch(ActionCreatorData.getUsers(null));
    dispatch(ActionCreatorApp.toglleUsersPreload(true));
    dispatch(ActionCreatorApp.toglleMessangesPreload(true));

    const dataBase = firebase.firestore().collection(`rooms`);
    dataBase.where('idRoom', '==', idRoom).onSnapshot(async (snapshot) => {
      const dataRoom = snapshot.docs.map((room) => ({
        ...room.data(),
      }));

      await dispatch(ActionCreatorData.getDataSelectRoom(dataRoom[0]));
      await dispatch(ActionCreatorApp.toglleSideBarArrowBtn(false));
    });
  },

  createChannel: (nameRoom: string, adminRoom: string, usersRoom: any[]) => async (dispatch: any) => {
    const idRoom = nanoid();

    const fireStore = firebase.firestore();
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
  deleteChannel: () => (dispatch: any) => { },
  ///////////////////////////////////////////

  addUserToChannel: (userId: string, idRoom: string, usersRoom: any, nameRoom: string) => async (
    dispatch: any
  ) => {
    const usersRoomNew = [userId];

    firebase
      .firestore()
      .collection(`rooms`)
      .doc(idRoom)
      .update({
        usersRoom: firebase.firestore.FieldValue.arrayUnion(userId),
      });

    addRoomFirebaseUsers(firebase, usersRoomNew, idRoom, nameRoom);

    await dispatch(OperationData.loadUsers({ usersRoom, idRoom }, false));
  },

  loadComment: (idRoom: string, toglleMessangesPreload: boolean) => (dispatch: any): void => {
    const fireStore = firebase.firestore();
    const refRoom = fireStore
      .collection(`rooms`)
      .doc(idRoom)
      .collection(`messages`)
      .orderBy('timestamp');

    refRoom.onSnapshot(async (snapshot) => {
      const messages = snapshot.docs.map((message) => ({
        ...message.data(),
      }));
      await dispatch(ActionCreatorData.getMessagesList(messages));

      if (toglleMessangesPreload) {
        await dispatch(ActionCreatorApp.toglleMessangesPreload(false));
      }
    });
  },

  createComment: (idRoom: string, message: string, nameUser: string, userId: string) => (dispatch: any): void => {
    const idMessage = nanoid();

    const fireStore = firebase.firestore();
    const refRoom = fireStore
      .collection(`rooms`)
      .doc(idRoom)
      .collection(`messages`)
      .doc(idMessage);

    refRoom.set({
      idMessage,
      message,
      nameUser,
      userId,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  },

  ///////////////////////////////////////////
  deleteComment: () => (dispatch: any) => { },
  ///////////////////////////////////////////

  changeUserDateInfo: (userAuthId: string, postEditInfo: any) => async (dispatch: any) => {
    if (
      typeof postEditInfo.photoUrl === 'object' &&
      postEditInfo.photoUrl !== null
    ) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(
        `images/${userAuthId}/logo-${userAuthId}.svg`
      );
      await fileRef.put(postEditInfo.photoUrl);
      let filePhotoUrl = await fileRef.getDownloadURL();
      postEditInfo.photoUrl = filePhotoUrl;
    }

    const db = firebase.database().ref(`/users/${userAuthId}`);
    await db.update(postEditInfo);
  },
};

export const dataReducer = (state = initialState, action: DataActionInterface): DataState => {
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
