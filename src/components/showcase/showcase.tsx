import * as React from "react";
import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { indexShowcaseParams, AppMediaQuery } from "../../helpers/const";

SwiperCore.use([Navigation, A11y, Autoplay]);

interface SwiperShowcaseState {
  isDesktop: boolean;
}

class SwiperShowcase extends React.PureComponent<{}, SwiperShowcaseState> {
  constructor(props) {
    super(props);

    this.state = {
      isDesktop: window.matchMedia(AppMediaQuery.DESKTOP).matches,
    };

    this.updateMediaBreakpoints = this.updateMediaBreakpoints.bind(this);
  }

  private updateMediaBreakpoints() {
    this.setState({
      isDesktop: window.matchMedia(AppMediaQuery.DESKTOP).matches,
    });
  }

  componentDidMount() {
    window.addEventListener(`resize`, this.updateMediaBreakpoints);
  }

  componentWillUnmount() {
    window.removeEventListener(`resize`, this.updateMediaBreakpoints);
  }

  render() {
    const { isDesktop } = this.state;

    return isDesktop ? (
      <Swiper
        className="showcase"
        navigation={indexShowcaseParams.navigation}
        a11y={indexShowcaseParams.a11y}
        autoplay={indexShowcaseParams.autoplay}
        loop={indexShowcaseParams.loop}
        direction={indexShowcaseParams.direction}
        slidesPerView={indexShowcaseParams.slidesPerView}
        speed={indexShowcaseParams.speed}
      >
        <SwiperSlide className={`showcase--slide1`}></SwiperSlide>
        <SwiperSlide className={`showcase--slide2`}></SwiperSlide>
        <SwiperSlide className={`showcase--slide3`}></SwiperSlide>
        <SwiperSlide className={`showcase--slide4`}></SwiperSlide>
        <SwiperSlide className={`showcase--slide5`}></SwiperSlide>
      </Swiper>
    ) : (
      <Swiper
        className="showcase"
        navigation={false}
        allowTouchMove={false}
        slidesPerView={indexShowcaseParams.slidesPerView}
      >
        <SwiperSlide className={`showcase--slide1`}></SwiperSlide>
      </Swiper>
    );
  }
}

export default SwiperShowcase;
