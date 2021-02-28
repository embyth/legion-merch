import * as React from "react";
import { Link } from "react-router-dom";

import { AppRoute, Pages } from "../../helpers/const";

import LegionLogo from "./logo.svg";

interface PageHeaderProps {
  currentPage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  currentPage,
}: PageHeaderProps) => (
  <header className="site-header" id="site-header">
    <div className="site-header__inner">
      {currentPage === Pages.MAIN ? (
        <div className="site-header__hamburger">
          <button
            className="site-header__toggler menu-toggler hamburger"
            type="button"
            title="Меню"
            aria-label="Открыть меню"
          >
            <span className="hamburger--bar"></span>
            <span className="hamburger--bar"></span>
            <span className="hamburger--bar"></span>
          </button>
        </div>
      ) : (
        <div className="site-header__logo">
          <Link
            to={AppRoute.ROOT}
            className="site-header__logo-link"
            aria-label="На главную страницу"
          >
            <LegionLogo />
          </Link>
        </div>
      )}

      <nav className="user-nav">
        <ul className="user-nav__list">
          <li className="user-nav__item">
            <button
              className="user-nav__button user-nav__button--cart"
              type="button"
              title="Корзина"
              aria-label="Показать корзину"
            >
              <svg className="user-nav__svg" width="20" height="20">
                <use xlinkHref="img/sprite.svg#icon-bag"></use>
              </svg>
            </button>
          </li>
          <li className="user-nav__item">
            <button
              className="user-nav__button user-nav__button--search"
              type="button"
              title="Поиск"
              aria-label="Открыть окно поиска"
            >
              <svg className="user-nav__svg" width="20" height="20">
                <use xlinkHref="img/sprite.svg#icon-search"></use>
              </svg>
            </button>
          </li>
          <li className="user-nav__item">
            <a
              className="user-nav__button"
              href="profile.html"
              title="Профиль"
              aria-label="Перейти в свой профиль"
            >
              <svg className="user-nav__svg" width="20" height="20">
                <use xlinkHref="img/sprite.svg#icon-account"></use>
              </svg>
            </a>
          </li>
          <li className="user-nav__item user-nav__item--hamburger">
            <button
              className="user-nav__button user-nav__button--menu hamburger menu-toggler"
              type="button"
              title="Меню"
              aria-label="Показать меню"
            >
              <span className="hamburger--bar"></span>
              <span className="hamburger--bar"></span>
              <span className="hamburger--bar"></span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default PageHeader;
