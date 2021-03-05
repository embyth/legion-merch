import {combineReducers} from "redux";

import NameSpace from "./name-space";
import {reducer as app} from "./app/app";
import {reducer as data} from "./data/data";

export default combineReducers({
  [NameSpace.APP]: app,
  [NameSpace.DATA]: data,
});
