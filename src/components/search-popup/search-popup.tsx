import * as React from "react";
import {connect} from "react-redux";

import {getIsSearchPopupOpen} from "../../store/app/selectors";
import {ActionCreator} from "../../store/app/app";

interface SearchPopupProps {
  isSearchPopupOpen: boolean;
  onSearchCloseAction(): void;
}

class SearchPopup extends React.PureComponent<SearchPopupProps> {
  constructor(props) {
    super(props);

    this.onEscKeyDown = this.onEscKeyDown.bind(this);
  }

  private onEscKeyDown(evt) {
    if (evt.keyCode === 27) {
      this.props.onSearchCloseAction();
    }
  }

  componentDidMount() {
    if (this.props.isSearchPopupOpen) {
      document.addEventListener(`keydown`, this.onEscKeyDown);
    }
  }

  componentDidUpdate() {
    if (this.props.isSearchPopupOpen) {
      document.addEventListener(`keydown`, this.onEscKeyDown);
    } else {
      document.removeEventListener(`keydown`, this.onEscKeyDown);
    }
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this.onEscKeyDown);
  }

  render() {
    const {isSearchPopupOpen, onSearchCloseAction} = this.props;

    return (
      <div
        className={`search ${isSearchPopupOpen && `search--open`}`}
        id="search-pop"
      >
        <div className="search__inner">
          <form
            action="https://echo.htmlacademy.ru"
            method="get"
            className="search__form"
          >
            <div className="search__input-group">
              <input
                className="search__input"
                id="search-field"
                name="search-query"
                type="text"
                placeholder="Поиск"
                autoComplete="off"
                aria-label="Поиск по магазину"
              />
              <label className="search__label" htmlFor="search-field">
                Поиск
              </label>
            </div>
          </form>
          <button
            className="search__close"
            type="button"
            onClick={onSearchCloseAction}
          >
            Закрыть окно поиска
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isSearchPopupOpen: getIsSearchPopupOpen(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSearchCloseAction() {
    dispatch(ActionCreator.closeSearchPopup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPopup);
