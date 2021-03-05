import * as React from "react";
import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { indexShowcaseParams } from "../../helpers/swiper-params";

SwiperCore.use([Navigation, A11y, Autoplay]);

interface SwiperShowcaseProps {
  mediaQueries: {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
  };
}

const SwiperShowcase: React.FC<SwiperShowcaseProps> = ({
  mediaQueries,
}: SwiperShowcaseProps) => {
  const { isDesktop } = mediaQueries;

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
};

export default SwiperShowcase;
