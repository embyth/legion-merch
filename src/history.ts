import {createBrowserHistory} from "history";

import store from "./store/store";
import {ActionCreator} from "./store/app/app";

const history = createBrowserHistory();

history.listen(() => {
  store.dispatch(ActionCreator.handlePageChange());
});

export default history;
