import * as React from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "../../helpers/const";

class NotFound extends React.PureComponent<{}, {}> {
  private _titleRef: React.RefObject<HTMLHeadingElement>;
  private _pageRef: React.RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);

    this._titleRef = React.createRef();
    this._pageRef = React.createRef();

    this.handlePageMouseMove = this.handlePageMouseMove.bind(this);
    this.handleTitleMouseMove = this.handleTitleMouseMove.bind(this);
  }

  private handlePageMouseMove(evt) {
    const title = this._titleRef.current;

    let x = evt.pageX - window.innerWidth / 2;
    let y = evt.pageY - window.innerHeight / 2;

    title.style.setProperty("--x", x + "px");
    title.style.setProperty("--y", y + "px");
  }

  private handleTitleMouseMove(evt) {
    const title = this._titleRef.current;

    let x = evt.pageX - window.innerWidth / 2;
    let y = evt.pageY - window.innerHeight / 2;

    let rad = +Math.atan2(y, x).toFixed(2);
    let length = Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / 10);

    let x_shadow = Math.round(length * Math.cos(rad));
    let y_shadow = Math.round(length * Math.sin(rad));

    title.style.setProperty("--x-shadow", -x_shadow + "px");
    title.style.setProperty("--y-shadow", -y_shadow + "px");
  }

  componentDidMount() {
    const title = this._titleRef.current;
    const page = this._pageRef.current;

    title.onmousemove = this.handleTitleMouseMove;
    page.onmousemove = this.handlePageMouseMove;
  }

  componentWillUnmount() {
    const title = this._titleRef.current;
    const page = this._pageRef.current;

    title.onmousemove = null;
    page.onmousemove = null;
  }

  render() {
    return (
      <div className="page page--404" ref={this._pageRef}>
        <h1 className="visually-hidden">Страницу не найдено</h1>

        <section className="error">
          <p className="error__subtitle">Упс, похоже здесь ничего нету!</p>
          <h2 className="error__title" ref={this._titleRef}>
            <p>404</p>
            404
          </h2>
          <div className="error__buttons">
            <Link
              to={AppRoute.ROOT}
              className="button button--secondary button--glitch"
            >
              Главная
            </Link>
            <Link
              to={AppRoute.CATALOG}
              className="button button--secondary button--glitch"
            >
              Каталог
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default NotFound;
