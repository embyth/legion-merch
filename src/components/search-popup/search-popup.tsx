import * as React from "react";
import {connect} from "react-redux";
import history from "../../history";

import {getIsSearchPopupOpen} from "../../store/app/selectors";
import {ActionCreator} from "../../store/app/app";

import {AppRoute} from "../../helpers/const";

interface SearchPopupProps {
  isSearchPopupOpen: boolean;
  onSearchCloseAction(): void;
}

class SearchPopup extends React.PureComponent<SearchPopupProps> {
  private searchQuery: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.searchQuery = React.createRef();

    this.onEscKeyDown = this.onEscKeyDown.bind(this);
    this.onSearchSubmitClick = this.onSearchSubmitClick.bind(this);
  }

  private onEscKeyDown(evt) {
    if (evt.keyCode === 27) {
      this.props.onSearchCloseAction();
    }
  }

  private onSearchSubmitClick(evt) {
    evt.preventDefault();

    history.push(`${AppRoute.SEARCH.path}/${this.searchQuery.current.value}`);
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
          <form className="search__form" onSubmit={this.onSearchSubmitClick}>
            <div className="search__input-group">
              <input
                className="search__input"
                id="search-field"
                name="search-query"
                type="text"
                placeholder="Поиск"
                autoComplete="off"
                aria-label="Поиск по магазину"
                ref={this.searchQuery}
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
