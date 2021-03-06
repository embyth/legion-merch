import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducer from "./reducer";
import {Operations as DataOperations} from "./data/data";

import {createAPI} from "../api";

const api = createAPI();

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperations.loadProducts());

export default store;
