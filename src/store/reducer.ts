import {combineReducers} from "redux";

import NameSpace from "./name-space";
import {reducer as app} from "./app/app";

export default combineReducers({
  [NameSpace.APP]: app,
});
