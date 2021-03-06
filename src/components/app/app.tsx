import * as React from "react";
import {Router, Route, Switch} from "react-router-dom";

import history from "../../history";

import withMediaQueries from "../../hocs/with-media-queries/with-media-queries";

import PrivateRoute from "../private-route/private-route";
import Page from "../page/page";
import MainPage from "../main-page/main-page";
import CatalogPage from "../catalog-page/catalog-page";
import CollectionsPage from "../collections-page/collections-page";
import ProductPage from "../product-page/product-page";
import CartPage from "../cart-page/cart-page";
import SearchPage from "../search-page/search-page";
import AboutPage from "../about-page/about-page";
import ContactsPage from "../contacts-page/contacts-page";
import DeliveryPage from "../delivery-page/delivery-page";
import SizesPage from "../sizes-page/sizes-page";
import FaqPage from "../faq-page/faq-page";
import PrivacyPage from "../privacy-page/privacy-page";
import LoginPage from "../login-page/login-page";
import SignupPage from "../signup-page/signup-page";
import ProfilePage from "../profile-page/profile-page";
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
          path={`${AppRoute.COLLECTIONS.path}/:collection?`}
          render={(props) => (
            <Page
              routeProps={props}
              component={CollectionsPage}
              currentPage={AppRoute.COLLECTIONS}
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
          path={`${AppRoute.SEARCH.path}/:query?`}
          render={(props) => (
            <Page
              routeProps={props}
              component={SearchPage}
              currentPage={AppRoute.SEARCH}
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

        <Route
          exact
          path={AppRoute.LOGIN.path}
          render={(props) => (
            <Page
              routeProps={props}
              component={LoginPage}
              currentPage={AppRoute.LOGIN}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.SIGNUP.path}
          render={(props) => (
            <Page
              routeProps={props}
              component={SignupPage}
              currentPage={AppRoute.SIGNUP}
            />
          )}
        />

        <PrivateRoute
          exact
          path={AppRoute.PROFILE.path}
          currentPage={AppRoute.PROFILE}
          component={ProfilePage}
        />

        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
