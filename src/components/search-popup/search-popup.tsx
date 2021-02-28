import * as React from "react";

const SearchPopup: React.FC = () => (
  <div className="search" id="search-pop">
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
      <button className="search__close" type="button">
        Закрыть окно поиска
      </button>
    </div>
  </div>
);

export default SearchPopup;
