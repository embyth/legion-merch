import * as React from "react";
import {connect} from "react-redux";

import {ActionCreator as AppActionCreator} from "../../store/app/app";
import {
  getProductByAlias,
  getCollectionByAlias,
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
import {CollectionInterface, ProductInterface, RouteProps} from "../../helpers/my-types";

const SideMenuWrapped = withMediaQueries(SideMenu);
const SideCartWrapped = withMediaQueries(SideCart);

interface CurrentPageInterface {
  path: string;
  title: string;
  category: string;
}

interface PageProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
  currentPage: CurrentPageInterface
  product: ProductInterface;
  collection: CollectionInterface,
  categories: Array<ProductInterface[`category`]>;
  productsRequestStatus: string;
  setCurrentPage(currentPage: CurrentPageInterface): void;
}

class Page extends React.PureComponent<PageProps> {
  constructor(props) {
    super(props);

    props.setCurrentPage(this.props.currentPage);
  }

  private setDocumentTitle() {
    const {
      currentPage: {title},
      product,
      collection,
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
    } else if (collection) {
      document.title = `${collection.name} ⏆ LEGION`;
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
    this.props.setCurrentPage(this.props.currentPage);
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
        <PageHeader />
        <Component routeProps={routeProps} />
        {currentPage.category !== PageCategories.MAIN ? <PageFooter /> : null}
        <SideMenuWrapped />
        {currentPage.category !== PageCategories.CART ? <SideCartWrapped /> : null}
        {currentPage.category !== PageCategories.SEARCH ? <SearchPopup /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  categories: getProductsCategories(state),
  product: getProductByAlias(state, ownProps),
  collection: getCollectionByAlias(state, ownProps),
  productsRequestStatus: getProductsRequestStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage(currentPage) {
    dispatch(AppActionCreator.setCurrentPage(currentPage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
