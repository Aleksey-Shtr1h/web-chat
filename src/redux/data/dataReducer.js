import { firebase } from '../../utils/firebase.js';
import { nanoid } from 'nanoid';

import { ActionCreatorData, ActionTypeData } from './dataAction.js';
import { ActionCreatorApp } from '../app/appAction.js';

export const initialState = {
  usersRoom: [],
};

export const OperationData = {

  loadUsers: (usersId = []) => (dispatch) => {
    const dataBase = firebase.database().ref(`users`);

    dataBase.on(`value`, async (snapshot) => {
      const usersBase = Object.values(snapshot.val());

      const users = usersId.map((userId) => {
        return usersBase.find((userBase) => {
          return userId === userBase.id
        })
      })

      await dispatch(ActionCreatorData.getUsers(users));
      dispatch(ActionCreatorApp.toglleUsersPreload(false));
    });
  },

  loadChannel: () => (dispatch) => {
  },

  test: (usersRoom, idRoom, nameRoom) => (dispatch) => {
    const dataBase = firebase.database().ref(`users`);
    let usersAuthId = [];

    dataBase.on(`value`, async (snapshot) => {
      const usersBase = Object.entries(snapshot.val());

      usersAuthId = usersRoom.map((userId) => {
        return usersBase.find((userBase) => {
          return userId === userBase[1].id
        })[0];
      })
    });

    if (usersAuthId.length > 0) {
      usersAuthId.forEach((userAuthId) => {
        const dataBaseInfo = firebase.database().ref(`users/${userAuthId}/channelsUser`).push();

        dataBaseInfo.set({ idRoom, nameRoom });
      })
    }

  },


  createChannel: (nameRoom, adminRoom, usersRoom) => async (dispatch) => {
    const dataBase = firebase.firestore()
    const refComments = dataBase.collection(`rooms`);
    const idRoom = nanoid();

    refComments.add({
      id: idRoom,
      info: {
        nameRoom,
        adminRoom,
      },
      usersRoom,
    });

    await dispatch(ActionCreatorApp.toglleModalAddChannel(false));
    dispatch(OperationData.test(usersRoom, idRoom, nameRoom));
  },

  deleteChannel: () => (dispatch) => {
  },

};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeData.GET_USERS:
      return {
        ...state,
        usersRoom: action.payload,
      };

    default:
      break;
  }

  return state;
};