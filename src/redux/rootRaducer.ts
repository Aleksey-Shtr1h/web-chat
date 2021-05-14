import { combineReducers } from 'redux';
import { dataReducer } from './data/dataReducer';
import { appReducer } from './app/appReducer';
import { userReducer } from './user/userReducer';
// import { NameSpace } from './nameSpace';

export const rootReducer = combineReducers({
  DATA: dataReducer,
  APP: appReducer,
  USER: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;