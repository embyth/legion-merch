import * as React from "react";
import {Link} from "react-router-dom";

import {AppRoute} from "../../helpers/const";

class SignupPage extends React.PureComponent<Record<string, never>> {
  private userNameRef: React.RefObject<HTMLInputElement>;
  private userSurnameRef: React.RefObject<HTMLInputElement>;
  private userEmailRef: React.RefObject<HTMLInputElement>;
  private userPasswordRef: React.RefObject<HTMLInputElement>;

  constructor(props: Record<string, never>) {
    super(props);

    this.userNameRef = React.createRef();
    this.userSurnameRef = React.createRef();
    this.userEmailRef = React.createRef();
    this.userPasswordRef = React.createRef();

    this.handleUserSignupSubmit = this.handleUserSignupSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleUserEmailChange = this.handleUserEmailChange.bind(this);
    this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
  }

  private handleUserSignupSubmit(evt) {
    evt.preventDefault();

    const userSignupData = {
      userName: this.userNameRef.current.value,
      userSurname: this.userSurnameRef.current.value,
      userEmail: this.userEmailRef.current.value,
      userPassword: this.userPasswordRef.current.value,
    };

    console.log(userSignupData); // eslint-disable-line
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

  private handleUserPasswordChange(evt) {
    const target = evt.target;

    target.classList.remove(`form__input--error`);
    target.setCustomValidity(``);

    if (target.validity.valueMissing) {
      target.classList.add(`form__input--error`);
      target.setCustomValidity(`Легионер, без пароля то куда?!`);
    }
  }

  render(): React.ReactNode {
    return (
      <main className="main-content" id="main-content">
        <h1 className="visually-hidden">Регистрация в интернет-магазине Legion</h1>

        <section className="form form--signup">
          <h2 className="page-title">Регистрация</h2>

          <form className="form__form-field" onSubmit={this.handleUserSignupSubmit}>
            <fieldset>
              <div className="form__fieldset">
                <div className="form__input-group">
                  <input className="form__input" id="user-name" name="user-name" type="text" placeholder="Имя"
                    autoComplete="off" autoCapitalize="words" aria-label="Ваше имя" required ref={this.userNameRef} onChange={this.handleUserNameChange} onInvalid={this.handleUserNameChange} />
                  <label className="form__label" htmlFor="user-name">Имя</label>
                </div>
                <div className="form__input-group">
                  <input className="form__input" id="user-surname" name="user-surname" type="text" placeholder="Фамилия"
                    autoComplete="off" autoCapitalize="words" aria-label="Ваша фамилия" required ref={this.userSurnameRef} onChange={this.handleUserNameChange} onInvalid={this.handleUserNameChange} />
                  <label className="form__label" htmlFor="user-surname">Фамилия</label>
                </div>
                <div className="form__input-group">
                  <input className="form__input" id="user-email" name="user-email" type="email" placeholder="Эл. почта"
                    autoCapitalize="off" aria-label="Ваша электронная почта" required ref={this.userEmailRef} onChange={this.handleUserEmailChange} onInvalid={this.handleUserEmailChange} />
                  <label className="form__label" htmlFor="user-email">Эл. почта</label>
                </div>
                <div className="form__input-group">
                  <input className="form__input" id="user-password" name="user-password" type="password" placeholder="Пароль"
                    aria-label="Придумайте пароль" required ref={this.userPasswordRef} onChange={this.handleUserPasswordChange} onInvalid={this.handleUserPasswordChange} />
                  <label className="form__label" htmlFor="user-password">Пароль</label>
                </div>
              </div>
            </fieldset>
            <div className="form__button-group">
              <button className="form__button button button--primary button--glitch" type="submit"
                value="Create Accaunt">Вступить в легион</button>
              <Link to={AppRoute.LOGIN.path} className="form__link">Уже есть аккаунт?</Link>
            </div>
          </form>
        </section>

      </main>
    );
  }
}

export default SignupPage;
