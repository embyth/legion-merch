import * as React from "react";

import PageHeader from "../page-header/page-header";
import PageFooter from "../page-footer/page-footer";
import SearchPopup from "../search-popup/search-popup";
import SideCart from "../side-cart/side-cart";
import SideMenu from "../side-menu/side-menu";

import { Pages } from "../../helpers/const";

interface ContactsPageState {
  selectValue: string;
}

class ContactsPage extends React.PureComponent<{}, ContactsPageState> {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: `not-selected`,
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleUserMessageInput = this.handleUserMessageInput.bind(this);
  }

  private handleSelectChange(evt) {
    this.setState({
      selectValue: evt.target.value,
    });
  }

  private handleUserMessageInput(evt) {
    evt.target.style.height = `auto`;
    evt.target.style.height = `${evt.target.scrollHeight + 1}px`;
  }

  render() {
    const { selectValue } = this.state;

    return (
      <div className="page page--inner page--customer-care">
        <PageHeader currentPage={Pages.CLIENT} />

        <main className="main-content" id="main-content">
          <h1 className="visually-hidden">
            Контактная форма интернет-магазина Legion
          </h1>

          <section className="form form--contact" id="form-contact">
            <h2 className="page-title">Связаться с нами</h2>

            <form
              className="form__form-field"
              action="https://echo.htmlacademy.ru"
              method="post"
            >
              <fieldset>
                <div className="form__fieldset">
                  <div className="form__input-group">
                    <input
                      className="form__input"
                      id="user-name"
                      name="user-name"
                      type="text"
                      placeholder="Имя"
                      autoComplete="off"
                      autoCapitalize="words"
                      aria-label="Ваше имя"
                      required
                    />
                    <label className="form__label" htmlFor="user-name">
                      Имя
                    </label>
                  </div>
                  <div className="form__input-group">
                    <input
                      className="form__input"
                      id="user-email"
                      name="user-email"
                      type="email"
                      placeholder="Эл. почта"
                      autoCapitalize="off"
                      aria-label="Ваша электронная почта"
                      required
                    />
                    <label className="form__label" htmlFor="user-email">
                      Эл. почта
                    </label>
                  </div>
                  <div className="form__input-group">
                    <select
                      className="form__select"
                      name="contact-reason"
                      id="contact-reason"
                      value={selectValue}
                      required
                      onChange={this.handleSelectChange}
                    >
                      <option disabled value="not-selected"></option>
                      <option value="order-status">Узнать Статус Заказа</option>
                      <option value="request-return">Запрос на Возврат</option>
                      <option value="cancel-change">
                        Отмена или Изменение Заказа
                      </option>
                      <option value="faulty-item">
                        Ошибочный / Поврежденный Товар
                      </option>
                      <option value="website-issue">Проблемы с сайтом</option>
                      <option value="other">Другое</option>
                    </select>
                    <label
                      className={`form__label form__label--select ${
                        selectValue !== `not-selected`
                          ? `form__label--selected`
                          : ``
                      }`}
                      htmlFor="contact-reason"
                    >
                      Чем можем помочь?
                    </label>
                    <svg className="form__select-svg" width="15" height="15">
                      <use xlinkHref="img/sprite.svg#icon-caret"></use>
                    </svg>
                  </div>
                  <div className="form__input-group">
                    <textarea
                      className="form__message"
                      name="user-message"
                      id="user-message"
                      placeholder="Ваше сообщение"
                      required
                      onInput={this.handleUserMessageInput}
                    ></textarea>
                    <label className="form__label" htmlFor="user-message">
                      Ваше сообщение
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="form__button-group">
                <button
                  className="form__button button button--primary button--glitch"
                  type="submit"
                  value="Login"
                >
                  Отправить
                </button>
              </div>
            </form>
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

export default ContactsPage;
