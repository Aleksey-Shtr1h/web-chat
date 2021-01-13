import { firebase } from "../../utils/firebase.js";

import { ActionTypeTest } from "./tetsAction";
import { userProfile } from "../../mock/userProfile";

export const initialState = {
  userProfile: userProfile,
};

export const OperationTest = {
  testAddUserToChannel: (idUser, idRoom) => (dispatch) => {

    firebase.firestore().collection(`rooms`)
      .doc(idRoom)
      .update({
        usersRoom: firebase.firestore.FieldValue.arrayUnion(idUser),
      });
  },
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeTest.TEST:
      return { ...state, userProfile: newFunction(action) }

    default:
      break;
  }

  return state;
};

function newFunction(action) {
  return action.payload;
}
