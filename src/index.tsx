import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducer";

import App from "./components/app/app";

const root = document.querySelector(`#root`);

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
