import * as React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../page-header/page-header";
import PageFooter from "../page-footer/page-footer";
import SearchPopup from "../search-popup/search-popup";
import SideCart from "../side-cart/side-cart";
import SideMenu from "../side-menu/side-menu";

import { AppRoute, Pages } from "../../helpers/const";

interface FaqPageState {
  activeQuestionIndex: number | null;
}

class FaqPage extends React.PureComponent<{}, FaqPageState> {
  constructor(props) {
    super(props);

    this.state = {
      activeQuestionIndex: null,
    };

    this.handleQuestionItemClick = this.handleQuestionItemClick.bind(this);
    this.updateQuestionsStyle = this.updateQuestionsStyle.bind(this);
  }

  private handleQuestionItemClick(evt) {
    const index = +evt.target.dataset.question;

    this.setState({
      activeQuestionIndex:
        index === this.state.activeQuestionIndex ? null : index,
    });
  }

  private updateQuestionsStyle() {
    const answers = document.querySelectorAll<HTMLElement>(`.faq__answer`);

    answers.forEach((answer) => {
      answer.style.setProperty(`--height`, `${answer.scrollHeight}px`);
    });
  }

  componentDidMount() {
    this.updateQuestionsStyle();
    window.onresize = this.updateQuestionsStyle;
  }

  componentWillUnmount() {
    window.onresize = null;
  }

  render() {
    const { activeQuestionIndex } = this.state;

    return (
      <div className="page page--inner page--customer-care">
        <PageHeader currentPage={Pages.CLIENT} />

        <main className="main-content" id="main-content">
          <h1 className="visually-hidden">
            Часто задаваемые вопросы интернет-магазина Legion
          </h1>

          <section className="faq">
            <h2 className="page-title">FAQs</h2>

            <ul className="faq__list">
              <li
                className={`faq__item ${
                  activeQuestionIndex === 0 ? `faq__item--active` : ``
                }`}
              >
                <button
                  className="faq__question"
                  type="button"
                  aria-expanded={activeQuestionIndex === 0}
                  data-question={0}
                  onClick={this.handleQuestionItemClick}
                >
                  Какие способы оплаты вы принимаете?
                </button>
                <p
                  className="faq__answer"
                  aria-hidden={activeQuestionIndex !== 0}
                >
                  Мы принимаем следующие платежи:
                  <br />
                  <b>Qiwi</b>
                  <br />
                  <b>WebMoney</b>
                  <br />
                  <b>Yandex.Money</b>
                  <br />
                  <b>Все основные кредитные и дебетовые карты.</b>
                  <br />
                  Цены, указанные в нашем интернет-магазине, указаны в гривнах.
                  Ваш банк или компания, выпускающая кредитные карты,
                  конвертирует сумму в местную валюту, если вы живете за
                  пределами Украины. Мы используем безопасный сервер, чтобы ваши
                  платежные данные оставались в безопасности.
                  <br />
                  Мы также принимаем подарочные карты Visa, но вам нужно будет
                  зарегистрировать свою карту, прежде чем покупать онлайн.
                  <br />
                  Мы не принимаем платежи чеком или почтовым переводом.
                </p>
              </li>
              <li
                className={`faq__item ${
                  activeQuestionIndex === 1 ? `faq__item--active` : ``
                }`}
              >
                <button
                  className="faq__question"
                  type="button"
                  aria-expanded={activeQuestionIndex === 1}
                  data-question={1}
                  onClick={this.handleQuestionItemClick}
                >
                  У меня есть проблемы с оформлением заказа
                </button>
                <p
                  className="faq__answer"
                  aria-hidden={activeQuestionIndex !== 1}
                >
                  Если вы получаете сообщение об ошибке во время оплаты,
                  убедитесь, что вы используете последнюю версию своего
                  веб-браузера. Если вы продолжаете получать сообщения об
                  ошибках, обратитесь в службу поддержки клиентов{" "}
                  <Link to={AppRoute.CONTACTS}>здесь</Link>.
                </p>
              </li>
              <li
                className={`faq__item ${
                  activeQuestionIndex === 2 ? `faq__item--active` : ``
                }`}
              >
                <button
                  className="faq__question"
                  type="button"
                  aria-expanded={activeQuestionIndex === 2}
                  data-question={2}
                  onClick={this.handleQuestionItemClick}
                >
                  Когда появиться (название) вещь?
                </button>
                <p
                  className="faq__answer"
                  aria-hidden={activeQuestionIndex !== 2}
                >
                  Чтобы сохранить LEGION уникальным, все наши продукты выпущены
                  ограниченным тиражом. Если вы ищете предыдущий товар, который
                  сейчас распродан на нашем сайте, мы иногда на нашем складе
                  обнаруживаем скрытые драгоценности, которые продаем в нашем
                  профиле{" "}
                  <a href="https://t.me/legionco" target="_blank">
                    Telegram
                  </a>
                  . К сожалению, эти распроданные товары не будут пополняться на
                  веб-сайте или в магазинах. Обязательно подпишитесь на нас в
                  Telegram, VK или подпишитесь на нашу рассылку, чтобы первыми
                  увидеть наши новые продукты.
                </p>
              </li>
              <li
                className={`faq__item ${
                  activeQuestionIndex === 3 ? `faq__item--active` : ``
                }`}
              >
                <button
                  className="faq__question"
                  type="button"
                  aria-expanded={activeQuestionIndex === 3}
                  data-question={3}
                  onClick={this.handleQuestionItemClick}
                >
                  Могу ли я сделать дизайн для ваших вещей?
                </button>
                <p
                  className="faq__answer"
                  aria-hidden={activeQuestionIndex !== 3}
                >
                  Большая часть наших художественных работ создается нами,
                  однако мы иногда используем дизайнеров-фрилансеров в наших
                  моделях. Если вы хотите представить какую-либо работу на
                  рассмотрение, отправьте электронное письмо&nbsp;
                  <Link to={AppRoute.CONTACTS} target="_blank">
                    здесь
                  </Link>
                  . Пожалуйста, включите ссылку на онлайн-портфолио, и мы
                  свяжемся с вами. Любые дизайнерские возможности будут
                  рекламироваться на нашем сайте.
                </p>
              </li>
              <li
                className={`faq__item ${
                  activeQuestionIndex === 4 ? `faq__item--active` : ``
                }`}
              >
                <button
                  className="faq__question"
                  type="button"
                  aria-expanded={activeQuestionIndex === 4}
                  data-question={4}
                  onClick={this.handleQuestionItemClick}
                >
                  Какие ваши заводские условия?
                </button>
                <p
                  className="faq__answer"
                  aria-hidden={activeQuestionIndex !== 4}
                >
                  В Legion мы тесно сотрудничаем с нашими поставщиками, которые
                  постоянно стремятся к тому, чтобы вся наша продукция
                  производилась на заводах с самыми высокими стандартами условий
                  труда. Их команды по обеспечению соответствия регулярно
                  посещают фабрики, чтобы обеспечить соблюдение и
                  совершенствование международных стандартов, включая Oeko-tex и
                  WRAP.
                </p>
              </li>
              <li
                className={`faq__item ${
                  activeQuestionIndex === 5 ? `faq__item--active` : ``
                }`}
              >
                <button
                  className="faq__question"
                  type="button"
                  aria-expanded={activeQuestionIndex === 5}
                  data-question={5}
                  onClick={this.handleQuestionItemClick}
                >
                  Как получить у вас работу?
                </button>
                <p
                  className="faq__answer"
                  aria-hidden={activeQuestionIndex !== 5}
                >
                  В настоящее время у нас нет свободных вакансий в Legion.
                  Доступные вакансии будут размещены на нашем сайте.
                </p>
              </li>
              <li
                className={`faq__item ${
                  activeQuestionIndex === 6 ? `faq__item--active` : ``
                }`}
              >
                <button
                  className="faq__question"
                  type="button"
                  aria-expanded={activeQuestionIndex === 6}
                  data-question={6}
                  onClick={this.handleQuestionItemClick}
                >
                  Какая у вас валютная конвертация?
                </button>
                <p
                  className="faq__answer"
                  aria-hidden={activeQuestionIndex !== 6}
                >
                  Все цены на нашем сайте, указаны в гривнах. Банк, выпустивший
                  вашу кредитную карту, определяет точный курс обмена, с
                  которого вы будете платить, но в целом он должен
                  соответствовать текущему курсу. Чтобы получить оценку текущего
                  курса, перейдите по ссылке ниже:
                  <br />
                  <br />
                  <a href="https://cuex.com/ru" target="_blank">
                    Cuex
                  </a>
                  <br />
                  <br />
                  (Это приблизительная оценка, которая не находится под нашим
                  контролем, поэтому это не гарантированные тарифы)
                </p>
              </li>
              <li
                className={`faq__item ${
                  activeQuestionIndex === 7 ? `faq__item--active` : ``
                }`}
              >
                <button
                  className="faq__question"
                  type="button"
                  aria-expanded={activeQuestionIndex === 7}
                  data-question={7}
                  onClick={this.handleQuestionItemClick}
                >
                  Могу ли я размещать ваши вещи в моем магазине?
                </button>
                <p
                  className="faq__answer"
                  aria-hidden={activeQuestionIndex !== 7}
                >
                  К сожалению, мы не поставляем нашу продукцию оптом.
                </p>
              </li>
            </ul>
          </section>
        </main>

        <PageFooter />
        <SideMenu currentPage={Pages.CLIENT} />
        <SideCart />
        <SearchPopup />
      </div>
    );
  }
}

export default FaqPage;
