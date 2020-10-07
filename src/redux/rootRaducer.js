import {combineReducers} from 'redux';
import {dataReducer} from './data/dataReducer.js';
import {appReducer} from './app/appReducer.js';
import {userReducer} from './user/userReducer.js';
import {NameSpace} from "./nameSpace.js";

export const rootReducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.APP]: appReducer,
  [NameSpace.USER]: userReducer,
});