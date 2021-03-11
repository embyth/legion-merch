import {combineReducers} from "redux";

import NameSpace from "./name-space";
import {reducer as app} from "./app/app";
import {reducer as data} from "./data/data";
import {reducer as cart} from "./cart/cart";
import {reducer as user} from "./user/user";

export default combineReducers({
  [NameSpace.APP]: app,
  [NameSpace.DATA]: data,
  [NameSpace.CART]: cart,
  [NameSpace.USER]: user,
});
