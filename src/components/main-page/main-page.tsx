import * as React from "react";
import {Link} from "react-router-dom";

import withMediaQueries from "../../hocs/with-media-queries/with-media-queries";

import Showcase from "../showcase/showcase";

import {AppRoute} from "../../helpers/const";

const ShowcaseWrapped = withMediaQueries(Showcase);

const MainPage: React.FC = () => (
  <React.Fragment>
    <main className="main-content" id="main-content">
      <h1 className="visually-hidden">Интернет-магазин одежды Legion</h1>

      <ShowcaseWrapped />

      <div className="bg-controls">
        <button
          className="bg-controls__button bg-controls__button--prev"
          type="button"
        >
          <svg className="bg-controls__svg" width="20" height="20">
            <use xlinkHref="/img/sprite.svg#icon-caret"></use>
          </svg>
        </button>
        <button
          className="bg-controls__button bg-controls__button--next"
          type="button"
        >
          <svg className="bg-controls__svg" width="20" height="20">
            <use xlinkHref="/img/sprite.svg#icon-caret"></use>
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
  </React.Fragment>
);

export default MainPage;
