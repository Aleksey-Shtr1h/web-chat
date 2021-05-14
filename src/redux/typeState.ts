import { AppState } from "./app/typesApp";
import { DataState } from "./data/typesData";
import { UserState } from "./user/typesUser";

export interface GlobalState {
  APP: AppState;
  DATA: DataState;
  USER: UserState;
};