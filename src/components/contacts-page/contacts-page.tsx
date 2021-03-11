import * as React from "react";

interface ContactsPageState {
  selectValue: string;
}

class ContactsPage extends React.PureComponent<Record<string, never>, ContactsPageState> {
  private userNameRef: React.RefObject<HTMLInputElement>;
  private userEmailRef: React.RefObject<HTMLInputElement>;
  private userMessageRef: React.RefObject<HTMLTextAreaElement>;

  constructor(props: Record<string, never>) {
    super(props);

    this.userNameRef = React.createRef();
    this.userEmailRef = React.createRef();
    this.userMessageRef = React.createRef();

    this.state = {
      selectValue: ``,
    };

    this.handleContactFormSubmit = this.handleContactFormSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleUserEmailChange = this.handleUserEmailChange.bind(this);
    this.handleUserSelectChange = this.handleUserSelectChange.bind(this);
    this.handleUserMessageChange = this.handleUserMessageChange.bind(this);
  }

  private handleContactFormSubmit(evt) {
    evt.preventDefault();

    const userContactData = {
      userName: this.userNameRef.current.value,
      userEmail: this.userEmailRef.current.value,
      userReason: this.state.selectValue,
      userMessage: this.userMessageRef.current.value,
    };

    console.log(userContactData); // eslint-disable-line
  }

  private handleUserNameChange(evt) {
    const target = evt.target;
    const validationMassage = target.id === `user-name`
      ? `У вас должно быть имя!`
      : `Укажите вашу фамилию!`;

    target.classList.remove(`form__input--error`);
    target.setCustomValidity(``);

    if (target.validity.valueMissing) {
      target.classList.add(`form__input--error`);
      target.setCustomValidity(validationMassage);
    }
  }

  private handleUserEmailChange(evt) {
    const target = evt.target;

    target.classList.remove(`form__input--error`);
    target.setCustomValidity(``);

    if (target.validity.typeMismatch) {
      target.classList.add(`form__input--error`);
      target.setCustomValidity(`Боец, я ожидаю здесь увидить электронную почту!`);
    } else if (target.validity.valueMissing) {
      target.classList.add(`form__input--error`);
      target.setCustomValidity(`Электронная почта обязательна!`);
    }
  }

  private handleUserSelectChange(evt) {
    const target = evt.target;

    this.setState({
      selectValue: target.value,
    });

    target.style.borderColor = ``;
    target.setCustomValidity(``);

    if (target.value === ``) {
      target.style.borderColor = `red`;
      target.setCustomValidity(`Выберите причину обращения к нам!`);
    }
  }

  private handleUserMessageChange(evt) {
    const target = evt.target;

    target.style.height = `auto`;
    target.style.height = `${target.scrollHeight + 1}px`;

    target.classList.remove(`form__input--error`);
    target.setCustomValidity(``);

    if (target.validity.valueMissing) {
      target.classList.add(`form__input--error`);
      target.setCustomValidity(`Опишите вашу проблему!`);
    }
  }

  render(): React.ReactNode {
    const {selectValue} = this.state;

    return (
      <React.Fragment>
        <main className="main-content" id="main-content">
          <h1 className="visually-hidden">
            Контактная форма интернет-магазина Legion
          </h1>

          <section className="form form--contact" id="form-contact">
            <h2 className="page-title">Связаться с нами</h2>

            <form className="form__form-field" onSubmit={this.handleContactFormSubmit}>
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
                      ref={this.userNameRef}
                      onChange={this.handleUserNameChange}
                      onInvalid={this.handleUserNameChange}
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
                      ref={this.userEmailRef}
                      onChange={this.handleUserEmailChange}
                      onInvalid={this.handleUserEmailChange}
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
                      onChange={this.handleUserSelectChange}
                      onInvalid={this.handleUserSelectChange}
                    >
                      <option disabled value=""></option>
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
                        selectValue !== ``
                          ? `form__label--selected`
                          : ``
                      }`}
                      htmlFor="contact-reason"
                    >
                      Чем можем помочь?
                    </label>
                    <svg className="form__select-svg" width="15" height="15">
                      <use xlinkHref="/img/sprite.svg#icon-caret"></use>
                    </svg>
                  </div>
                  <div className="form__input-group">
                    <textarea
                      className="form__message"
                      name="user-message"
                      id="user-message"
                      placeholder="Ваше сообщение"
                      required
                      ref={this.userMessageRef}
                      onChange={this.handleUserMessageChange}
                      onInvalid={this.handleUserMessageChange}
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
      </React.Fragment>
    );
  }
}

export default ContactsPage;
