import { Dispatch } from "react";
import { firebase } from '../../utils/firebase';
import { nanoid } from 'nanoid';

import { ActionCreatorData } from './dataAction';
import { ActionCreatorApp } from '../app/appAction';

import {
  addRoomFirebaseUsers,
  deleteUserRoom,
  checkDoubleDate,
} from '../../utils/firebase/firebase-utils';
import { ActionTypeData, DataActionInterface, DataState, LoadMessagesListInterface } from "./typesData";
import { GlobalActionInterface } from '../typeState';
import { UserProfileInterface } from "../user/typesUser";

export const initialState: DataState = {
  usersRoom: null,
  selectRoom: null,
  messagesList: null,
};

export const OperationData: any = {
  loadUsers: (selectRoom: { usersRoom: string[]; idRoom: string }, isLoadUser: boolean) => (dispatch: Dispatch<GlobalActionInterface>) => {
    const { usersRoom = [], idRoom = `` } = selectRoom;

    dispatch(ActionCreatorApp.toglleUsersPreload(true));
    const dataBase = firebase.database().ref(`users`);

    dataBase.on(`value`, async (snapshot) => {
      const users: UserProfileInterface[] | any[] = [];
      const usersBase: UserProfileInterface[] = Object.values(snapshot.val());
      console.log(usersBase);


      usersRoom.forEach((userId) => {
        const resultFinsUser: UserProfileInterface | undefined = usersBase.find((userBase: UserProfileInterface): boolean => {
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
        dispatch(OperationData.loadComment(idRoom, true));
      }
      dispatch(ActionCreatorData.getUsers(users));
      dispatch(ActionCreatorApp.toglleUsersPreload(false));
    });
  },

  loadChannel: (idRoom: string) => (dispatch: Dispatch<GlobalActionInterface>) => {
    dispatch(ActionCreatorData.getDataSelectRoom(null));
    dispatch(ActionCreatorData.getUsers(null));
    dispatch(ActionCreatorApp.toglleUsersPreload(true));
    dispatch(ActionCreatorApp.toglleMessangesPreload(true));

    const dataBase = firebase.firestore().collection(`rooms`);
    dataBase.where('idRoom', '==', idRoom).onSnapshot(async (snapshot) => {
      const dataRoom: { [x: number]: any; } = snapshot.docs.map((room) => ({
        ...room.data(),
      }));

      dispatch(ActionCreatorData.getDataSelectRoom(dataRoom[0]));
      dispatch(ActionCreatorApp.toglleSideBarArrowBtn(false));
    });
  },

  createChannel: (nameRoom: string, adminRoom: string, usersRoom: any[]) => async (dispatch: Dispatch<GlobalActionInterface>) => {
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

    dispatch(ActionCreatorApp.toglleModalAddChannel(false));
    addRoomFirebaseUsers(firebase, usersRoom, idRoom, nameRoom);
  },

  ///////////////////////////////////////////
  // deleteChannel: () => (dispatch: Dispatch<GlobalActionInterface>) => { },
  ///////////////////////////////////////////

  addUserToChannel: (userId: string, idRoom: string, usersRoom: any, nameRoom: string) => async (
    dispatch: Dispatch<GlobalActionInterface>
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

    dispatch(OperationData.loadUsers({ usersRoom, idRoom }, false));
  },

  loadComment: (idRoom: string, toglleMessangesPreload: boolean) => (dispatch: Dispatch<GlobalActionInterface>): void => {
    const fireStore = firebase.firestore();
    const refRoom = fireStore
      .collection(`rooms`)
      .doc(idRoom)
      .collection(`messages`)
      .orderBy('timestamp');

    refRoom.onSnapshot(async (snapshot) => {
      const messages: LoadMessagesListInterface[] | any[] = snapshot.docs.map((message) => ({
        ...message.data(),
      }));

      dispatch(ActionCreatorData.getMessagesList(messages));

      if (toglleMessangesPreload) {
        dispatch(ActionCreatorApp.toglleMessangesPreload(false));
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
  // deleteComment: () => (dispatch: any) => { },
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
      const filePhotoUrl = await fileRef.getDownloadURL();
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
