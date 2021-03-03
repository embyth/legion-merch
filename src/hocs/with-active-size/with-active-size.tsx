import * as React from "react";

import { Sizes } from "../../helpers/const";

interface WithActiveSizeState {
  currentSize: string;
}

const withActiveSize = (Component) => {
  type P = React.ComponentProps<typeof Component>;

  class WithActiveSize extends React.PureComponent<P, WithActiveSizeState> {
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

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
          currentSize: this.props.defaultCurrentSize,
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onSizeButtonClick={this.handleSizeButtonClick}
          currentSize={this.state.currentSize}
        />
      );
    }
  }

  return WithActiveSize;
};

export default withActiveSize;
