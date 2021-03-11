import * as React from "react";
import {Redirect, Route, RouteProps} from "react-router";
import {connect} from "react-redux";

import {getAuthorizationStatus} from "../../store/user/selectors";

import Page from "../page/page";

import {AppRoute, AuthorizationStatus} from "../../helpers/const";

interface PrivateRouteProps {
  exact: boolean;
  path: string;
  component: React.ComponentType<RouteProps>;
  currentPage: {
    path: string;
    title: string;
    category: string;
  };
  authorizationStatus: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  exact, path, component, currentPage, authorizationStatus
}: PrivateRouteProps) => (
  <Route
    exact={exact}
    path={path}
    render={(routeProps) => {
      return authorizationStatus === AuthorizationStatus.AUTH
        ? <Page routeProps={routeProps} component={component} currentPage={currentPage} />
        : <Redirect to={AppRoute.LOGIN.path} />;
    }}
  />
);

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);
