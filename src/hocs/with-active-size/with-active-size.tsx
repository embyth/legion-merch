import * as React from "react";
import {Subtract} from "utility-types";

import {Sizes} from "../../helpers/const";

interface InjectedProps {
  currentSize: string;
  onSizeButtonClick(type: string): void;
}

interface WithActiveSizeState {
  currentSize: string;
}

const withActiveSize = <P extends InjectedProps>(
  Component: React.ComponentType<P>
): React.ComponentClass => {
  class WithActiveSize extends React.PureComponent<
    Subtract<P, InjectedProps>,
    WithActiveSizeState
  > {
    constructor(props) {
      super(props);

      this.state = {
        currentSize: Sizes.XS,
      };

      this.handleSizeButtonClick = this.handleSizeButtonClick.bind(this);
    }

    private handleSizeButtonClick(size) {
      this.setState({
        currentSize: size,
      });
    }

    render() {
      return (
        <Component
          {...this.props as P}
          onSizeButtonClick={this.handleSizeButtonClick}
          currentSize={this.state.currentSize}
        />
      );
    }
  }

  return WithActiveSize;
};

export default withActiveSize;
