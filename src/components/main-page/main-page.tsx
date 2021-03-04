import * as React from "react";
import { Link } from "react-router-dom";

import Showcase from "../showcase/showcase";
import SideMenu from "../side-menu/side-menu";
import PageHeader from "../page-header/page-header";
import SideCart from "../side-cart/side-cart";
import SearchPopup from "../search-popup/search-popup";

import { AppRoute } from "../../helpers/const";

const MainPage: React.FC = () => (
  <div className="page page--front">
    <PageHeader currentPage={AppRoute.ROOT} />

    <main className="main-content" id="main-content">
      <h1 className="visually-hidden">Интернет-магазин одежды Legion</h1>

      <SideMenu currentPage={AppRoute.ROOT} />
      <SideCart />
      <Showcase />

      <div className="bg-controls">
        <button
          className="bg-controls__button bg-controls__button--prev"
          type="button"
        >
          <svg className="bg-controls__svg" width="20" height="20">
            <use xlinkHref="img/sprite.svg#icon-caret"></use>
          </svg>
        </button>
        <button
          className="bg-controls__button bg-controls__button--next"
          type="button"
        >
          <svg className="bg-controls__svg" width="20" height="20">
            <use xlinkHref="img/sprite.svg#icon-caret"></use>
          </svg>
        </button>
      </div>

      <div className="button-holder">
        <Link
          to={AppRoute.CATALOG.path}
          className="button button--secondary button--glitch"
          aria-label="Перейти на страницу каталога"
        >
          Каталог
        </Link>
      </div>
    </main>

    <SearchPopup />
  </div>
);

export default MainPage;
