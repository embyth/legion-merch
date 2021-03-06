import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getCurrentPage, getIsSideMenuOpen} from "../../store/app/selectors";
import {ActionCreator} from "../../store/app/app";
import {getCartTotalItems} from "../../store/cart/selectors";

import {AppRoute, PageCategories} from "../../helpers/const";

import LegionLogo from "./logo.svg";

interface PageHeaderProps {
  currentPage: {
    path: string;
    title: string;
    category: string;
  };
  isSideMenuOpen: boolean;
  cartTotalItems: number;
  onMenuOpenButtonClick(): void;
  onMenuToggleButtonClick(): void;
  onSearchOpenButtonClick(): void;
  onCartToggleButtonClick(): void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  currentPage,
  isSideMenuOpen,
  cartTotalItems,
  onMenuOpenButtonClick,
  onMenuToggleButtonClick,
  onSearchOpenButtonClick,
  onCartToggleButtonClick,
}: PageHeaderProps) => (
  <header className="site-header" id="site-header">
    <div className="site-header__inner">
      {currentPage.category === PageCategories.MAIN ? (
        <div className="site-header__hamburger">
          <button
            className={`site-header__toggler menu-toggler hamburger ${
              isSideMenuOpen && `menu-toggler--opened`
            }`}
            type="button"
            title="Меню"
            aria-label="Открыть меню"
            onClick={onMenuOpenButtonClick}
          >
            <span className="hamburger--bar"></span>
            <span className="hamburger--bar"></span>
            <span className="hamburger--bar"></span>
          </button>
        </div>
      ) : (
        <div className="site-header__logo">
          <Link
            to={AppRoute.ROOT.path}
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
              onClick={onCartToggleButtonClick}
            >
              <svg className="user-nav__svg" width="20" height="20">
                <use xlinkHref="/img/sprite.svg#icon-bag"></use>
              </svg>
              <span className="user-nav__button--cart-value">{cartTotalItems === 0 ? `` : cartTotalItems}</span>
            </button>
          </li>
          <li className="user-nav__item">
            <button
              className="user-nav__button user-nav__button--search"
              type="button"
              title="Поиск"
              aria-label="Открыть окно поиска"
              onClick={onSearchOpenButtonClick}
            >
              <svg className="user-nav__svg" width="20" height="20">
                <use xlinkHref="/img/sprite.svg#icon-search"></use>
              </svg>
            </button>
          </li>
          <li className="user-nav__item">
            <Link
              to={AppRoute.PROFILE.path}
              className="user-nav__button"
              title="Профиль"
              aria-label="Перейти в свой профиль"
            >
              <svg className="user-nav__svg" width="20" height="20">
                <use xlinkHref="/img/sprite.svg#icon-account"></use>
              </svg>
            </Link>
          </li>
          {currentPage.category !== PageCategories.MAIN && (
            <li className="user-nav__item user-nav__item--hamburger">
              <button
                className={`user-nav__button user-nav__button--menu hamburger menu-toggler ${
                  isSideMenuOpen && `menu-toggler--opened`
                }`}
                type="button"
                title="Меню"
                aria-label="Показать меню"
                onClick={onMenuToggleButtonClick}
              >
                <span className="hamburger--bar"></span>
                <span className="hamburger--bar"></span>
                <span className="hamburger--bar"></span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  isSideMenuOpen: getIsSideMenuOpen(state),
  cartTotalItems: getCartTotalItems(state),
  currentPage: getCurrentPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMenuOpenButtonClick() {
    dispatch(ActionCreator.openSideMenu());
  },

  onMenuToggleButtonClick() {
    dispatch(ActionCreator.changeSideMenuState());
  },

  onSearchOpenButtonClick() {
    dispatch(ActionCreator.openSearchPopup());
  },

  onCartToggleButtonClick() {
    dispatch(ActionCreator.changeSideCartState());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
