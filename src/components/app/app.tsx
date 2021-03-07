import * as React from "react";
import {Router, Route, Switch} from "react-router-dom";

import history from "../../history";

import withMediaQueries from "../../hocs/with-media-queries/with-media-queries";

import Page from "../page/page";
import MainPage from "../main-page/main-page";
import CatalogPage from "../catalog-page/catalog-page";
import ProductPage from "../product-page/product-page";
import CartPage from "../cart-page/cart-page";
import AboutPage from "../about-page/about-page";
import ContactsPage from "../contacts-page/contacts-page";
import DeliveryPage from "../delivery-page/delivery-page";
import SizesPage from "../sizes-page/sizes-page";
import FaqPage from "../faq-page/faq-page";
import PrivacyPage from "../privacy-page/privacy-page";
import NotFound from "../not-found/not-found";

import {AppRoute} from "../../helpers/const";

const ProductPageWrapped = withMediaQueries(ProductPage);

const App: React.FC = () => (
  <React.Fragment>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT.path}
          render={(props) => (
            <Page
              routeProps={props}
              component={MainPage}
              currentPage={AppRoute.ROOT}
            />
          )}
        />

        <Route
          exact
          path={`${AppRoute.CATALOG.path}/:category?`}
          render={(props) => (
            <Page
              routeProps={props}
              component={CatalogPage}
              currentPage={AppRoute.CATALOG}
            />
          )}
        />

        <Route
          exact
          path={`${AppRoute.PRODUCT.path}/:alias`}
          render={(props) => (
            <Page
              routeProps={props}
              component={ProductPageWrapped}
              currentPage={AppRoute.PRODUCT}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.CART.path}
          render={(props) => (
            <Page
              routeProps={props}
              component={CartPage}
              currentPage={AppRoute.CART}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.ABOUT.path}
          render={(props) => (
            <Page
              routeProps={props}
              component={AboutPage}
              currentPage={AppRoute.ABOUT}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.CONTACTS.path}
          render={(props) => (
            <Page
              routeProps={props}
              component={ContactsPage}
              currentPage={AppRoute.CONTACTS}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.DELIVERY.path}
          render={(props) => (
            <Page
              routeProps={props}
              component={DeliveryPage}
              currentPage={AppRoute.DELIVERY}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.SIZES.path}
          render={(props) => (
            <Page
              routeProps={props}
              component={SizesPage}
              currentPage={AppRoute.SIZES}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.FAQ.path}
          render={(props) => (
            <Page
              routeProps={props}
              component={FaqPage}
              currentPage={AppRoute.FAQ}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.PRIVACY.path}
          render={(props) => (
            <Page
              routeProps={props}
              component={PrivacyPage}
              currentPage={AppRoute.PRIVACY}
            />
          )}
        />

        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
