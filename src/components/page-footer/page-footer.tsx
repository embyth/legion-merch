import * as React from "react";

const PageFooter: React.FC = () => (
  <footer className="site-footer" id="site-footer">
    <p className="site-footer__copyright">
      <span className="site-footer__copyright--symbol">&copy;</span>&nbsp;
      <span className="site-footer__copyright--year">
        {new Date().getFullYear()}
      </span>
      &nbsp;Legion&nbsp;Clothing
    </p>
    <div className="site-footer__socials socials">
      <ul className="socials__list">
        <li className="socials__item">
          <a
            className="socials__link"
            href="https://instagram.com/legionco"
            target="_blank"
            rel="noreferrer"
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
            rel="noreferrer"
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
            rel="noreferrer"
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
            rel="noreferrer"
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
    <div className="site-footer__developer">
      <span className="site-footer__developer-text">Developer</span>
      <ul className="site-footer__developer-list">
        <li className="site-footer__developer-item">
          <a
            className="site-footer__developer-link"
            href="https://github.com/embyth"
            title="GitHub"
            aria-label="ГитХаб разработчика"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="site-footer__developer-svg" width="20" height="20">
              <use xlinkHref="/img/sprite.svg#icon-github"></use>
            </svg>
          </a>
        </li>
        <li className="site-footer__developer-item">
          <a
            className="site-footer__developer-link"
            href="https://t.me/embyth"
            title="Telegram"
            aria-label="Телеграм разработчика"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="site-footer__developer-svg" width="20" height="20">
              <use xlinkHref="/img/sprite.svg#icon-telegram"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default PageFooter;
