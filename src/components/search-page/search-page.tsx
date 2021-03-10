import * as React from "react";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";
import history from "../../history";

import {getProductBySearchQuery} from "../../store/data/selectors";

import CatalogItem from "../catalog-item/catalog-item";

import {ProductInterface} from "../../helpers/my-types";
import {AppRoute} from "../../helpers/const";

interface MatchParams {
  category?: string;
  alias?: string;
  query?: string;
}

interface SearchPageProps {
  products: Array<ProductInterface>;
  routeProps: RouteComponentProps<MatchParams>;
}

interface SearchPageState {
  searchInputValue: string;
}

class SearchPage extends React.PureComponent<SearchPageProps, SearchPageState> {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: props.routeProps.match.params.query ? props.routeProps.match.params.query : ``,
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  private handleSearchInputChange(evt) {
    this.setState({
      searchInputValue: evt.target.value,
    });
  }

  private handleSearchSubmit(evt) {
    evt.preventDefault();

    history.push(`${AppRoute.SEARCH.path}/${this.state.searchInputValue}`);
  }

  render() {
    const {products, routeProps: {match: {params: {query}}}} = this.props;
    const {searchInputValue} = this.state;

    return (
      <main className="main-content" id="main-content">
        <h1 className="visually-hidden">Поиск по интернет-магазину Legion</h1>

        <section className="page-search">
          <h2 className="page-title">Поиск: начните печатать</h2>

          <form className="search__form" onSubmit={this.handleSearchSubmit}>
            <div className="search__input-group">
              <input className="search__input" id="search-field" name="search-query" type="text" placeholder="Поиск"
                autoComplete="off" aria-label="Поиск по магазину" value={searchInputValue} onChange={this.handleSearchInputChange} />
              <label className="search__label" htmlFor="search-field">Я ищу...</label>
            </div>
            <button className="page-search__submit" type="submit" aria-label="Начать поиск">
              <svg className="page-search__submit-svg" width="20" height="20">
                <use xlinkHref="/img/sprite.svg#icon-search"></use>
              </svg>
            </button>
          </form>
        </section>

        {query && (
          <section className="catalog">
            <h2 className="visually-hidden">Продукция найденная по запросу: {query ? query : ``}</h2>
            <div className="catalog__inner">
              {products.length > 0
                ? products.map((product) => (
                  <CatalogItem key={product.id} item={product} />
                ))
                : <span className="catalog__item--not-found">Ничего не найдено</span>}
            </div>
          </section>
        )}


      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  products: getProductBySearchQuery(state, ownProps),
});

export default connect(mapStateToProps)(SearchPage);
