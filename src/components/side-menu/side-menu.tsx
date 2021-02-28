import * as React from "react";
import { connect } from "react-redux";

import { ActionCreator } from "../../store/app/app";
import { getIsSideMenuOpen } from "../../store/app/selectors";

import { Pages } from "../../helpers/const";

import LegionerLogo from "./logo--legioner.svg";

interface SideMenuProps {
  currentPage: string;
  isSideMenuOpen: boolean;
  onMenuCloseEvent(): void;
}

class SideMenu extends React.PureComponent<SideMenuProps, {}> {
  constructor(props) {
    super(props);

    this.onEscKeyDown = this.onEscKeyDown.bind(this);
  }

  private onEscKeyDown(evt) {
    if (evt.keyCode === 27) {
      this.props.onMenuCloseEvent();
    }
  }

  componentDidMount() {
    if (this.props.isSideMenuOpen) {
      document.addEventListener(`keydown`, this.onEscKeyDown);
    }
  }

  componentDidUpdate() {
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
    const { currentPage, isSideMenuOpen, onMenuCloseEvent } = this.props;

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
        >
          <div className="site-nav__inner">
            {currentPage === Pages.MAIN && (
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
                  <a href="catalog.html" className="site-nav__item-link">
                    Новинки
                  </a>
                </li>
                <li className="site-nav__item">
                  <a href="catalog.html" className="site-nav__item-link">
                    Футболки
                  </a>
                </li>
                <li className="site-nav__item">
                  <a href="catalog.html" className="site-nav__item-link">
                    Худи
                  </a>
                </li>
                <li className="site-nav__item">
                  <a href="catalog.html" className="site-nav__item-link">
                    Аксессуары
                  </a>
                </li>
                <li className="site-nav__item">
                  <a href="catalog.html" className="site-nav__item-link">
                    Подарочные карты
                  </a>
                </li>
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
                <li className="site-nav__item">
                  <a href="contact.html" className="site-nav__item-link">
                    Клиентам
                  </a>
                </li>
                <li className="site-nav__item">
                  <a href="about.html" className="site-nav__item-link">
                    О нас
                  </a>
                </li>
              </ul>
            </nav>

            {currentPage === Pages.MAIN && (
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
                          <use xlinkHref="img/sprite.svg#icon-instagram"></use>
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
                          <use xlinkHref="img/sprite.svg#icon-vk"></use>
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
                          <use xlinkHref="img/sprite.svg#icon-telegram"></use>
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
                          <use xlinkHref="img/sprite.svg#icon-youtube"></use>
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
                          <use xlinkHref="img/sprite.svg#icon-github"></use>
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
                          <use xlinkHref="img/sprite.svg#icon-telegram"></use>
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
});

const mapDispatchToProps = (dispatch) => ({
  onMenuCloseEvent() {
    dispatch(ActionCreator.closeSideMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
