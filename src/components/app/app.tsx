import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../../history";

import MainPage from "../main-page/main-page";
import CatalogPage from "../catalog-page/catalog-page";
import ProductPage from "../product-page/product-page";
import AboutPage from "../about-page/about-page";
import NotFound from "../not-found/not-found";

import { AppRoute } from "../../helpers/const";

const App: React.FC = () => (
  <React.Fragment>
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={MainPage} />
        <Route exact path={AppRoute.CATALOG} component={CatalogPage} />
        <Route exact path={AppRoute.PRODUCT} component={ProductPage} />
        <Route exact path={AppRoute.ABOUT} component={AboutPage} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
