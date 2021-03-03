import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/store";

import App from "./components/app/app";

const root = document.querySelector(`#root`);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
