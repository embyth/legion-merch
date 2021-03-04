import * as React from "react";
import { RouteComponentProps } from "react-router";

import PageHeader from "../page-header/page-header";
import PageFooter from "../page-footer/page-footer";
import SearchPopup from "../search-popup/search-popup";
import SideCart from "../side-cart/side-cart";
import SideMenu from "../side-menu/side-menu";

import { AppRoute, PageCategories } from "../../helpers/const";

interface PageProps extends RouteComponentProps {
  component: React.ComponentType<any>;
  currentPage: {
    path: string;
    title: string;
    category: string;
  };
}

class Page extends React.PureComponent<PageProps, {}> {
  private setDocumentTitle(title) {
    document.title = `${title} ⏆ LEGION`;
  }

  componentDidMount() {
    this.setDocumentTitle(this.props.currentPage.title);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setDocumentTitle(this.props.currentPage.title);
      window.scrollTo(0, 0);
    }
  }

  render() {
    const Component = this.props.component;
    const { currentPage } = this.props;

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
          currentPage === AppRoute.PRIVACY || currentPage === AppRoute.DELIVERY
            ? `page--text`
            : ``
        }`}
      >
        <PageHeader currentPage={currentPage} />
        <Component />
        {currentPage.category !== PageCategories.MAIN ? <PageFooter /> : null}
        <SideMenu currentPage={currentPage} />
        <SideCart />
        <SearchPopup />
      </div>
    );
  }
}

export default Page;
