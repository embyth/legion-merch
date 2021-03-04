import * as React from "react";

import { AppMediaQuery } from "../../helpers/const";

interface WithMediaQueriesState {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

const withMediaQueries = (Component) => {
  type P = React.ComponentProps<typeof Component>;

  class WithMediaQueries extends React.PureComponent<P, WithMediaQueriesState> {
    constructor(props) {
      super(props);

      this.state = {
        isDesktop: window.matchMedia(AppMediaQuery.DESKTOP).matches,
        isTablet: window.matchMedia(AppMediaQuery.TABLET).matches,
        isMobile: window.matchMedia(AppMediaQuery.MOBILE).matches,
      };

      this.handleComponentResize = this.handleComponentResize.bind(this);
    }

    private handleComponentResize() {
      this.setState({
        isDesktop: window.matchMedia(AppMediaQuery.DESKTOP).matches,
        isTablet: window.matchMedia(AppMediaQuery.TABLET).matches,
        isMobile: window.matchMedia(AppMediaQuery.MOBILE).matches,
      });
    }

    componentDidMount() {
      window.addEventListener(`resize`, this.handleComponentResize);
    }

    componentWillUnmount() {
      window.removeEventListener(`resize`, this.handleComponentResize);
    }

    render() {
      const mediaQueries = {
        isDesktop: this.state.isDesktop,
        isTablet: this.state.isTablet,
        isMobile: this.state.isMobile,
      };

      return <Component {...this.props} mediaQueries={mediaQueries} />;
    }
  }

  return WithMediaQueries;
};

export default withMediaQueries;
