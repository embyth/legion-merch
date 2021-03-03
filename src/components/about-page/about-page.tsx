import * as React from "react";

import PageFooter from "../page-footer/page-footer";
import PageHeader from "../page-header/page-header";
import SearchPopup from "../search-popup/search-popup";
import SideMenu from "../side-menu/side-menu";
import SideCart from "../side-cart/side-cart";

import { Pages } from "../../helpers/const";

const AboutPage: React.FC = () => (
  <div className="page page--inner">
    <PageHeader currentPage={Pages.ABOUT} />
    <SideMenu currentPage={Pages.ABOUT} />

    <main className="main-content" id="main-content">
      <h1 className="visually-hidden">О интернет-магазине Legion</h1>

      <section className="team">
        <h2 className="page-title">О нас</h2>
        <p className="team__intro">
          Мы группа друзей которые любят играть в компьютерные игры и делиться
          этим с другими. Вокруг нас образовалось сообщество людей с которым мы
          хотим подилиться своим стилем.
        </p>
        <div className="team__wrapper">
          <article className="team__member">
            <div className="team__member-image">
              <picture>
                <source type="image/webp" srcSet="img/content/wycc.webp" />
                <img
                  src="img/content/wycc.png"
                  alt="Макс «Шустрила» Козлов"
                  className="team__member-photo"
                  width="290"
                  height="309"
                />
              </picture>
            </div>
            <h3 className="team__member-name">Максим «Wycc» Козлов</h3>
            <p className="team__member-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              magni mollitia ducimus repellat, ratione voluptatibus sed
              sapiente. Amet obcaecati sit quod optio praesentium vero, dolorem
              ea neque, quos ratione eos ullam officia. Similique ipsa magnam,
              odio voluptatem consectetur enim voluptate.
            </p>
            <div className="team__member-socials socials">
              <ul className="socials__list">
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.instagram.com/realwycc220"
                    target="_blank"
                    title="Instagram"
                    aria-label="Профиль Макса в инстаграм"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://vk.com/wyctpujla"
                    target="_blank"
                    title="VK"
                    aria-label="Страница Макса во вконтакте"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-vk"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://youtube.com/wycc220"
                    target="_blank"
                    title="YouTube"
                    aria-label="Канал Макса на ютьюб"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-youtube"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.twitch.tv/elwycco"
                    target="_blank"
                    title="Twitch"
                    aria-label="Канал Макса на твитче"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-twitch"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article className="team__member">
            <div className="team__member-image">
              <picture>
                <source type="image/webp" srcSet="img/content/cemka.webp" />
                <img
                  src="img/content/cemka.png"
                  alt="Арсений «CeMka» Стребков"
                  className="team__member-photo"
                  width="290"
                  height="309"
                />
              </picture>
            </div>
            <h3 className="team__member-name">Арсений «CeMka» Стребков</h3>
            <p className="team__member-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              magni mollitia ducimus repellat, ratione voluptatibus sed
              sapiente. Amet obcaecati sit quod optio praesentium vero, dolorem
              ea neque, quos ratione eos ullam officia. Similique ipsa magnam,
              odio voluptatem consectetur enim voluptate.
            </p>
            <div className="team__member-socials socials">
              <ul className="socials__list">
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.instagram.com/cemka7721"
                    target="_blank"
                    title="Instagram"
                    aria-label="Профиль Арсения в инстаграм"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://vk.com/fuck_yeah_cemka"
                    target="_blank"
                    title="VK"
                    aria-label="Страница Арсения во вконтакте"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-vk"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.youtube.com/channel/UChbaToovYyqbzOJtpGRLjsg"
                    target="_blank"
                    title="YouTube"
                    aria-label="Канал Арсения на ютьюб"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-youtube"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.twitch.tv/cemka"
                    target="_blank"
                    title="Twitch"
                    aria-label="Канал Арсения на твитче"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-twitch"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article className="team__member">
            <div className="team__member-image">
              <picture>
                <source type="image/webp" srcSet="img/content/taer.webp" />
                <img
                  src="img/content/taer.png"
                  alt="Терентий «TaeR» Стребков"
                  className="team__member-photo"
                  width="290"
                  height="309"
                />
              </picture>
            </div>
            <h3 className="team__member-name">Терентий «TaeR» Стребков</h3>
            <p className="team__member-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              magni mollitia ducimus repellat, ratione voluptatibus sed
              sapiente. Amet obcaecati sit quod optio praesentium vero, dolorem
              ea neque, quos ratione eos ullam officia. Similique ipsa magnam,
              odio voluptatem consectetur enim voluptate.
            </p>
            <div className="team__member-socials socials">
              <ul className="socials__list">
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.instagram.com/t.strebkov"
                    target="_blank"
                    title="Instagram"
                    aria-label="Профиль Терентия в инстаграм"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://vk.com/taerok"
                    target="_blank"
                    title="VK"
                    aria-label="Страница Терентия во вконтакте"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-vk"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.youtube.com/user/lTAeRl"
                    target="_blank"
                    title="YouTube"
                    aria-label="Канал Терентия на ютьюб"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-youtube"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.twitch.tv/taerss"
                    target="_blank"
                    title="Twitch"
                    aria-label="Канал Терентия на твитче"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-twitch"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article className="team__member">
            <div className="team__member-image">
              <picture>
                <source type="image/webp" srcSet="img/content/raduga.webp" />
                <img
                  src="img/content/raduga.png"
                  alt="Раду «PagyrA» Чернов"
                  className="team__member-photo"
                  width="290"
                  height="309"
                />
              </picture>
            </div>
            <h3 className="team__member-name">Раду «PagyrA» Чернов</h3>
            <p className="team__member-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              magni mollitia ducimus repellat, ratione voluptatibus sed
              sapiente. Amet obcaecati sit quod optio praesentium vero, dolorem
              ea neque, quos ratione eos ullam officia. Similique ipsa magnam,
              odio voluptatem consectetur enim voluptate.
            </p>
            <div className="team__member-socials socials">
              <ul className="socials__list">
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://vk.com/mojigobah"
                    target="_blank"
                    title="VK"
                    aria-label="Страница Раду во вконтакте"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-vk"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.youtube.com/channel/UChgRLu6TR6OxZu9EJVZ1IEQ"
                    target="_blank"
                    title="YouTube"
                    aria-label="Канал Раду на ютьюб"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-youtube"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.twitch.tv/thepagyyy"
                    target="_blank"
                    title="Twitch"
                    aria-label="Канал Раду на твитче"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-twitch"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article className="team__member">
            <div className="team__member-image">
              <picture>
                <source type="image/webp" srcSet="img/content/beastqt.webp" />
                <img
                  src="img/content/beastqt.png"
                  alt="Дмитрий «BeastQT» Локоть"
                  className="team__member-photo"
                  width="290"
                  height="309"
                />
              </picture>
            </div>
            <h3 className="team__member-name">Дмитрий «BeastQT» Локоть</h3>
            <p className="team__member-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              magni mollitia ducimus repellat, ratione voluptatibus sed
              sapiente. Amet obcaecati sit quod optio praesentium vero, dolorem
              ea neque, quos ratione eos ullam officia. Similique ipsa magnam,
              odio voluptatem consectetur enim voluptate.
            </p>
            <div className="team__member-socials socials">
              <ul className="socials__list">
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://instagram.com/beastqt/"
                    target="_blank"
                    title="Instagram"
                    aria-label="Профиль Димы в инстаграм"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://vk.com/beastqt"
                    target="_blank"
                    title="VK"
                    aria-label="Страница Димы во вконтакте"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-vk"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.youtube.com/channel/UC28Or9A84nu8gpQc3Mw6j4Q"
                    target="_blank"
                    title="YouTube"
                    aria-label="Канал Димы на ютьюб"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-youtube"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.twitch.tv/beastqt"
                    target="_blank"
                    title="Twitch"
                    aria-label="Канал Димы на твитче"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-twitch"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article className="team__member">
            <div className="team__member-image">
              <picture>
                <source type="image/webp" srcSet="img/content/insize.webp" />
                <img
                  src="img/content/insize.png"
                  alt="Георгий «insize» Сергеевич"
                  className="team__member-photo"
                  width="290"
                  height="309"
                />
              </picture>
            </div>
            <h3 className="team__member-name">Георгий «insize» Сергеевич</h3>
            <p className="team__member-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              magni mollitia ducimus repellat, ratione voluptatibus sed
              sapiente. Amet obcaecati sit quod optio praesentium vero, dolorem
              ea neque, quos ratione eos ullam officia. Similique ipsa magnam,
              odio voluptatem consectetur enim voluptate.
            </p>
            <div className="team__member-socials socials">
              <ul className="socials__list">
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="http://instagram.com/the.insize"
                    target="_blank"
                    title="Instagram"
                    aria-label="Профиль Георгия в инстаграм"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://vk.com/insizee"
                    target="_blank"
                    title="VK"
                    aria-label="Страница Георгия во вконтакте"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-vk"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.youtube.com/user/insize2h"
                    target="_blank"
                    title="YouTube"
                    aria-label="Канал Георгия на ютьюб"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-youtube"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.twitch.tv/insize"
                    target="_blank"
                    title="Twitch"
                    aria-label="Канал Георгия на твитче"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-twitch"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article className="team__member">
            <div className="team__member-image">
              <picture>
                <source type="image/webp" srcSet="img/content/alcore.webp" />
                <img
                  src="img/content/alcore.png"
                  alt="Алексей «AlCore» Бессараб"
                  className="team__member-photo"
                  width="290"
                  height="309"
                />
              </picture>
            </div>
            <h3 className="team__member-name">Алексей «AlCore» Бессараб</h3>
            <p className="team__member-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              magni mollitia ducimus repellat, ratione voluptatibus sed
              sapiente. Amet obcaecati sit quod optio praesentium vero, dolorem
              ea neque, quos ratione eos ullam officia. Similique ipsa magnam,
              odio voluptatem consectetur enim voluptate.
            </p>
            <div className="team__member-socials socials">
              <ul className="socials__list">
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.instagram.com/alcoreru1313/"
                    target="_blank"
                    title="Instagram"
                    aria-label="Профиль Алексея в инстаграм"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://vk.com/greshnik013"
                    target="_blank"
                    title="VK"
                    aria-label="Страница Алексея во вконтакте"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-vk"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.youtube.com/user/QuietDante"
                    target="_blank"
                    title="YouTube"
                    aria-label="Канал Алексея на ютьюб"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-youtube"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.twitch.tv/alcoreru"
                    target="_blank"
                    title="Twitch"
                    aria-label="Канал Алексея на твитче"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-twitch"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article className="team__member">
            <div className="team__member-image">
              <picture>
                <source type="image/webp" srcSet="img/content/huler.webp" />
                <img
                  src="img/content/huler.png"
                  alt="Артем «Soroket» Товстенко"
                  className="team__member-photo"
                  width="290"
                  height="309"
                />
              </picture>
            </div>
            <h3 className="team__member-name">Объект 40</h3>
            <p className="team__member-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              magni mollitia ducimus repellat, ratione voluptatibus sed
              sapiente. Amet obcaecati sit quod optio praesentium vero, dolorem
              ea neque, quos ratione eos ullam officia. Similique ipsa magnam,
              odio voluptatem consectetur enim voluptate.
            </p>
            <div className="team__member-socials socials">
              <ul className="socials__list">
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.instagram.com/rap_igrok1997/"
                    target="_blank"
                    title="Instagram"
                    aria-label="Профиль Артема в инстаграм"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://vk.com/id22058243"
                    target="_blank"
                    title="VK"
                    aria-label="Страница Артема во вконтакте"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-vk"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.twitch.tv/soroket"
                    target="_blank"
                    title="Twitch"
                    aria-label="Канал Артема на твитче"
                  >
                    <svg className="socials__svg" width="20" height="20">
                      <use xlinkHref="img/sprite.svg#icon-twitch"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>

    <SideCart />
    <PageFooter />
    <SearchPopup />
  </div>
);

export default AboutPage;
