import * as React from "react";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";

import {
  getProductByAlias,
  getProductsCategories,
  getProductsRequestStatus,
} from "../../store/data/selectors";

import withMediaQueries from "../../hocs/with-media-queries/with-media-queries";

import PageHeader from "../page-header/page-header";
import PageFooter from "../page-footer/page-footer";
import SearchPopup from "../search-popup/search-popup";
import SideCart from "../side-cart/side-cart";
import SideMenu from "../side-menu/side-menu";

import {AppRoute, PageCategories, RequestStatus} from "../../helpers/const";
import {ProductInterface} from "../../helpers/my-types";

const SideMenuWrapped = withMediaQueries(SideMenu);
const SideCartWrapped = withMediaQueries(SideCart);

interface MatchParams {
  category?: string;
  alias?: string;
  query?: string;
}

interface RouteProps {
  routeProps: RouteComponentProps<MatchParams>;
}

interface PageProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
  currentPage: {
    path: string;
    title: string;
    category: string;
  };
  product: ProductInterface;
  categories: Array<ProductInterface[`category`]>;
  productsRequestStatus: string;
}

class Page extends React.PureComponent<PageProps> {
  private setDocumentTitle() {
    const {
      currentPage: {title},
      product,
      categories,
      productsRequestStatus,
    } = this.props;

    const category = this.props.currentPage.category === PageCategories.CATALOG && this.props.routeProps.match.params.category;
    const search = this.props.currentPage.category === PageCategories.SEARCH && this.props.routeProps.match.params.query;

    const currentCategory = categories.find(
        (categoryIt) => categoryIt.alias === category
    );

    if (productsRequestStatus !== RequestStatus.SUCCESS) {
      document.title = `${title} ⏆ LEGION`;
    } else if (currentCategory) {
      document.title = `${currentCategory.label} ⏆ LEGION`;
    } else if (product) {
      document.title = `${product.name} ⏆ LEGION`;
    } else if (search) {
      document.title = `Поиск: ${search} ⏆ LEGION`;
    } else {
      document.title = `${title} ⏆ LEGION`;
    }
  }

  componentDidMount() {
    this.setDocumentTitle();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.routeProps.location.pathname !==
      prevProps.routeProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }

    this.setDocumentTitle();
  }

  render() {
    const Component = this.props.component;
    const {currentPage, routeProps} = this.props;

    return (
      <div
        className={`page ${
          currentPage.category === PageCategories.MAIN
            ? `page--front`
            : `page--inner`
        } ${
          currentPage.category === PageCategories.CLIENT
            ? `page--customer-care`
            : ``
        } ${
          currentPage.category === PageCategories.CART
            ? `page--cart`
            : ``
        } ${
          currentPage.category === PageCategories.SEARCH
            ? `page--search`
            : ``
        } ${
          currentPage === AppRoute.PRIVACY || currentPage === AppRoute.DELIVERY
            ? `page--text`
            : ``
        }`}
      >
        <PageHeader currentPage={currentPage} />
        <Component routeProps={routeProps} />
        {currentPage.category !== PageCategories.MAIN ? <PageFooter /> : null}
        <SideMenuWrapped currentPage={currentPage} />
        {currentPage.category !== PageCategories.CART ? <SideCartWrapped currentPage={currentPage} /> : null}
        {currentPage.category !== PageCategories.SEARCH ? <SearchPopup /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  categories: getProductsCategories(state),
  product: getProductByAlias(state, ownProps),
  productsRequestStatus: getProductsRequestStatus(state),
});

export default connect(mapStateToProps)(Page);
