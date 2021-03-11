import * as React from "react";

interface PasswordRestoreProps {
  onCancelClick(): void;
  onEmailChange(evt: React.SyntheticEvent): void;
}

class PasswordRestore extends React.PureComponent<PasswordRestoreProps> {
  private userEmailRef: React.RefObject<HTMLInputElement>;

  constructor(props: PasswordRestoreProps) {
    super(props);

    this.userEmailRef = React.createRef();

    this.handleRestorePasswordSubmit = this.handleRestorePasswordSubmit.bind(this);
  }

  private handleRestorePasswordSubmit(evt) {
    evt.preventDefault();

    const userPasswordRestoreData = {
      userEmail: this.userEmailRef.current.value,
    };

    console.log(userPasswordRestoreData); // eslint-disable-line
  }

  render(): React.ReactNode {
    const {onCancelClick, onEmailChange} = this.props;

    return (
      <section className="form form--restore" id="form-restore">
        <h2 className="page-title">Сброс пароля</h2>

        <form className="form__form-field" onSubmit={this.handleRestorePasswordSubmit}>
          <fieldset>
            <div className="form__fieldset">
              <div className="form__input-group">
                <input className="form__input" id="restore-email" name="restore-email" type="email" placeholder="Эл. почта"
                  autoCapitalize="off" aria-label="Ваша электронная почта" required ref={this.userEmailRef} onChange={onEmailChange} onInvalid={onEmailChange} />
                <label className="form__label" htmlFor="restore-email">Эл. почта</label>
              </div>
            </div>
          </fieldset>
          <div className="form__button-group">
            <button className="form__button button button--primary button--glitch" type="submit"
              value="Restore Password">Отправить</button>
            <button className="form__restore form__restore--close" type="button" onClick={onCancelClick}>Отмена</button>
          </div>
        </form>
      </section>
    );
  }
}

export default PasswordRestore;
