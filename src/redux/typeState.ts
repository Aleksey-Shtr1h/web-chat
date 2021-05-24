import { AppActionInterface, AppState } from "./app/typesApp";
import { DataActionInterface, DataState } from "./data/typesData";
import { UserActionInterface, UserState } from "./user/typesUser";

export interface GlobalState {
  APP: AppState;
  DATA: DataState;
  USER: UserState;
}

export type GlobalActionInterface = UserActionInterface | DataActionInterface | AppActionInterface;