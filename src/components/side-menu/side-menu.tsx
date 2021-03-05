import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { ActionCreator } from "../../store/app/app";
import { getIsSideMenuOpen } from "../../store/app/selectors";
import { getProductsCategories } from "../../store/data/selectors";

import { AppRoute, PageCategories } from "../../helpers/const";

import LegionerLogo from "./logo--legioner.svg";
import { ProductInterface } from "../../helpers/my-types";

interface SideMenuProps {
  currentPage: {
    path: string;
    title: string;
    category: string;
  };
  mediaQueries: {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
  };
  categories: ProductInterface[`category`][];
  isSideMenuOpen: boolean;
  onMenuCloseEvent(): void;
}

class SideMenu extends React.PureComponent<SideMenuProps, {}> {
  private myMenu: React.RefObject<HTMLElement>;

  constructor(props) {
    super(props);

    this.myMenu = React.createRef();

    this.onEscKeyDown = this.onEscKeyDown.bind(this);
    this.handleMenuHeight = this.handleMenuHeight.bind(this);
  }

  private onEscKeyDown(evt) {
    if (evt.keyCode === 27) {
      this.props.onMenuCloseEvent();
    }
  }

  private handleMenuHeight() {
    if (this.props.currentPage.category !== PageCategories.MAIN) {
      const { isDesktop, isTablet, isMobile } = this.props.mediaQueries;
      const headerHeight = +document.querySelector<HTMLElement>(`.site-header`)
        .offsetHeight;
      const footerHeight = +document.querySelector<HTMLElement>(`.site-footer`)
        .offsetHeight;

      if (isDesktop) {
        this.myMenu.current.style.height = `${
          window.innerHeight - headerHeight - footerHeight
        }px`;
      } else if (isTablet) {
        this.myMenu.current.style.height = `${
          window.innerHeight - headerHeight
        }px`;
      } else if (isMobile) {
        this.myMenu.current.style.height = `${
          window.innerHeight - headerHeight
        }px`;
      } else {
        this.myMenu.current.style.height = `${window.innerHeight}px`;
      }
    }
  }

  componentDidMount() {
    this.handleMenuHeight();

    if (this.props.isSideMenuOpen) {
      document.addEventListener(`keydown`, this.onEscKeyDown);
    }
  }

  componentDidUpdate() {
    this.handleMenuHeight();

    if (this.props.isSideMenuOpen) {
      document.addEventListener(`keydown`, this.onEscKeyDown);
    } else {
      document.removeEventListener(`keydown`, this.onEscKeyDown);
    }
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this.onEscKeyDown);
  }

  render() {
    const {
      currentPage,
      categories,
      isSideMenuOpen,
      onMenuCloseEvent,
    } = this.props;

    return (
      <React.Fragment>
        <div
          className={`overlay site-nav__overlay ${
            isSideMenuOpen && `site-nav__overlay--visible`
          }`}
          onClick={onMenuCloseEvent}
        ></div>
        <aside
          className={`site-nav ${isSideMenuOpen && `site-nav--open`}`}
          id="site-nav"
          ref={this.myMenu}
        >
          <div className="site-nav__inner">
            {currentPage.category === PageCategories.MAIN && (
              <header className="site-nav__header">
                <div className="site-nav__logo">
                  <LegionerLogo />
                </div>

                <button
                  className="site-nav__close-button"
                  type="button"
                  aria-label="Закрыть меню"
                  onClick={onMenuCloseEvent}
                ></button>
              </header>
            )}

            <nav className="site-nav__menu">
              <ul className="site-nav__list">
                <li className="site-nav__item">
                  <Link
                    to={AppRoute.CATALOG.path}
                    className="site-nav__item-link"
                  >
                    Каталог
                  </Link>
                </li>
                {categories.map((category) => (
                  <li key={category.alias} className="site-nav__item">
                    <Link
                      to={`${AppRoute.CATALOG.path}/${category.alias}`}
                      className="site-nav__item-link"
                    >
                      {category.label}
                    </Link>
                  </li>
                ))}
                <li className="site-nav__item site-nav__item--spacer">
                  <a href="catalog.html" className="site-nav__item-link">
                    Коллекции
                  </a>
                </li>
                <li className="site-nav__item">
                  <a href="search.html" className="site-nav__item-link">
                    Поиск
                  </a>
                </li>
                <li className="site-nav__item">
                  <a href="cart.html" className="site-nav__item-link">
                    Корзина
                  </a>
                </li>
                <li className="site-nav__item">
                  <a href="login.html" className="site-nav__item-link">
                    Войти&nbsp;/&nbsp;Регистрация
                  </a>
                </li>

                {currentPage.category === PageCategories.CLIENT ? (
                  <li className="site-nav__item">
                    <span className="site-nav__item-link site-nav__item-link--sub">
                      Клиентам
                    </span>
                    <ul className="site-nav__client-list">
                      <li className="site-nav__client-item">
                        {currentPage === AppRoute.CONTACTS ? (
                          <a className="site-nav__item-link">Связь с нами</a>
                        ) : (
                          <Link
                            to={AppRoute.CONTACTS.path}
                            className="site-nav__item-link"
                          >
                            Связь с нами
                          </Link>
                        )}
                      </li>
                      <li className="site-nav__client-item">
                        {currentPage === AppRoute.DELIVERY ? (
                          <a className="site-nav__item-link">
                            Доставка&nbsp;&amp;&nbsp;Возврат
                          </a>
                        ) : (
                          <Link
                            to={AppRoute.DELIVERY.path}
                            className="site-nav__item-link"
                          >
                            Доставка&nbsp;&amp;&nbsp;Возврат
                          </Link>
                        )}
                      </li>
                      <li className="site-nav__client-item">
                        {currentPage === AppRoute.SIZES ? (
                          <a className="site-nav__item-link">
                            Таблица размеров
                          </a>
                        ) : (
                          <Link
                            to={AppRoute.SIZES.path}
                            className="site-nav__item-link"
                          >
                            Таблица размеров
                          </Link>
                        )}
                      </li>
                      <li className="site-nav__client-item">
                        {currentPage === AppRoute.FAQ ? (
                          <a className="site-nav__item-link">FAQ</a>
                        ) : (
                          <Link
                            to={AppRoute.FAQ.path}
                            className="site-nav__item-link"
                          >
                            FAQ
                          </Link>
                        )}
                      </li>
                      <li className="site-nav__client-item">
                        {currentPage === AppRoute.PRIVACY ? (
                          <a className="site-nav__item-link">
                            Публичная оферта
                          </a>
                        ) : (
                          <Link
                            to={AppRoute.PRIVACY.path}
                            className="site-nav__item-link"
                          >
                            Публичная оферта
                          </Link>
                        )}
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="site-nav__item">
                    <Link
                      to={AppRoute.CONTACTS.path}
                      className="site-nav__item-link"
                    >
                      Клиентам
                    </Link>
                  </li>
                )}

                <li className="site-nav__item">
                  <Link
                    to={AppRoute.ABOUT.path}
                    className="site-nav__item-link"
                  >
                    О нас
                  </Link>
                </li>
              </ul>
            </nav>

            {currentPage.category === PageCategories.MAIN && (
              <footer className="site-nav__footer">
                <div className="site-nav__socials socials">
                  <ul className="socials__list">
                    <li className="socials__item">
                      <a
                        className="socials__link"
                        href="https://instagram.com/legionco"
                        target="_blank"
                        title="Instagram"
                        aria-label="Наш профиль в инстаграм"
                      >
                        <svg className="socials__svg" width="20" height="20">
                          <use xlinkHref="/img/sprite.svg#icon-instagram"></use>
                        </svg>
                      </a>
                    </li>
                    <li className="socials__item">
                      <a
                        className="socials__link"
                        href="https://vk.com/legionco"
                        target="_blank"
                        title="VK"
                        aria-label="Наша страница во вконтакте"
                      >
                        <svg className="socials__svg" width="20" height="20">
                          <use xlinkHref="/img/sprite.svg#icon-vk"></use>
                        </svg>
                      </a>
                    </li>
                    <li className="socials__item">
                      <a
                        className="socials__link"
                        href="https://t.me/legionco"
                        target="_blank"
                        title="Telegram"
                        aria-label="Наш канал в телеграм"
                      >
                        <svg className="socials__svg" width="20" height="20">
                          <use xlinkHref="/img/sprite.svg#icon-telegram"></use>
                        </svg>
                      </a>
                    </li>
                    <li className="socials__item">
                      <a
                        className="socials__link"
                        href="https://youtube.com/legionco"
                        target="_blank"
                        title="YouTube"
                        aria-label="Наш канал на ютьюб"
                      >
                        <svg className="socials__svg" width="20" height="20">
                          <use xlinkHref="/img/sprite.svg#icon-youtube"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="site-nav__developer">
                  <span className="site-nav__developer-text">Developer</span>
                  <ul className="site-nav__developer-list">
                    <li className="site-nav__developer-item">
                      <a
                        className="site-nav__developer-link"
                        href="https://github.com/embyth"
                        title="GitHub"
                        aria-label="ГитХаб разработчика"
                        target="_blank"
                      >
                        <svg
                          className="site-nav__developer-svg"
                          width="20"
                          height="20"
                        >
                          <use xlinkHref="/img/sprite.svg#icon-github"></use>
                        </svg>
                      </a>
                    </li>
                    <li className="site-nav__developer-item">
                      <a
                        className="site-nav__developer-link"
                        href="https://t.me/embyth"
                        title="Telegram"
                        aria-label="Телеграм разработчика"
                        target="_blank"
                      >
                        <svg
                          className="site-nav__developer-svg"
                          width="20"
                          height="20"
                        >
                          <use xlinkHref="/img/sprite.svg#icon-telegram"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
            )}
          </div>
        </aside>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isSideMenuOpen: getIsSideMenuOpen(state),
  categories: getProductsCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMenuCloseEvent() {
    dispatch(ActionCreator.closeSideMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
