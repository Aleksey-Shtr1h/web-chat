import { ActionTypeTest } from "./tetsAction";
import { userProfile } from "../../mock/userProfile";

export const initialState = {
  userProfile: userProfile,
};

export const OperationTest = {

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
