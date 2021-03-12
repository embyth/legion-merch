import * as React from "react";
import {Subtract} from "utility-types";

import {AppMediaQuery} from "../../helpers/const";

interface InjectedProps {
  mediaQueries: {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
  };
}

interface WithMediaQueriesState {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

const withMediaQueries = <P extends InjectedProps>(
  Component: React.ComponentType<P>
): React.ComponentClass => {
  class WithMediaQueries extends React.PureComponent<
    Subtract<P, InjectedProps>,
    WithMediaQueriesState
  > {
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

      return (
        <Component
          {...this.props as P}
          mediaQueries={mediaQueries} />
      );
    }
  }

  return WithMediaQueries;
};

export default withMediaQueries;
