import {combineReducers} from 'redux';
import {dataReducer} from './data/dataReducer.js';
import {NameSpace} from "./nameSpace.js";

export const rootReducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
});