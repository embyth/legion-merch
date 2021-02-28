import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../../history";

import MainPage from "../main-page/main-page";

import { AppRoute } from "../../helpers/const";

const App: React.FC = () => (
  <React.Fragment>
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={MainPage} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
