import * as React from "react";
import {Link} from "react-router-dom";

import PasswordRestore from "../password-restore/password-restore";

import {AppRoute} from "../../helpers/const";

interface LoginPageState {
  isRestorePasswordOpen: boolean;
}

class LoginPage extends React.PureComponent<Record<string, never>, LoginPageState> {
  private userEmailRef: React.RefObject<HTMLInputElement>;
  private userPasswordRef: React.RefObject<HTMLInputElement>;

  constructor(props: Record<string, never>) {
    super(props);

    this.userEmailRef = React.createRef();
    this.userPasswordRef = React.createRef();

    this.state = {
      isRestorePasswordOpen: false,
    };

    this.handlePasswordRestoreButtonClick = this.handlePasswordRestoreButtonClick.bind(this);
    this.handleCancelPasswordRestoreButtonClick = this.handleCancelPasswordRestoreButtonClick.bind(this);
    this.handleUserLoginSubmit = this.handleUserLoginSubmit.bind(this);
    this.handleUserEmailChange = this.handleUserEmailChange.bind(this);
    this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
  }

  private handlePasswordRestoreButtonClick() {
    this.setState({
      isRestorePasswordOpen: true,
    });
  }

  private handleCancelPasswordRestoreButtonClick() {
    this.setState({
      isRestorePasswordOpen: false,
    });
  }

  private handleUserLoginSubmit(evt) {
    evt.preventDefault();

    const userLoginData = {
      email: this.userEmailRef.current.value,
      password: this.userPasswordRef.current.value,
    };

    console.log(userLoginData); // eslint-disable-line
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
    const {isRestorePasswordOpen} = this.state;

    return (
      <main className="main-content" id="main-content">
        <h1 className="visually-hidden">Вход в личный кабинет интернет-магазина Legion</h1>

        {isRestorePasswordOpen
          ? <PasswordRestore onCancelClick={this.handleCancelPasswordRestoreButtonClick} onEmailChange={this.handleUserEmailChange} />
          : (
            <section className="form form--login" id="form-login">
              <h2 className="page-title">Вход</h2>

              <form className="form__form-field" onSubmit={this.handleUserLoginSubmit}>
                <fieldset>
                  <div className="form__fieldset">
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
                  <button className="form__button button button--primary button--glitch" type="submit" value="Login">Войти</button>
                  <button className="form__restore form__restore--caller" type="button" onClick={this.handlePasswordRestoreButtonClick}>Забыли пароль?</button>
                </div>
                <Link to={AppRoute.SIGNUP.path} className="form__link">Присоединиться к Легиону</Link>
              </form>
            </section>
          )}

      </main>
    );
  }
}

export default LoginPage;
