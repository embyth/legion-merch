import * as React from "react";
import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { indexShowcaseParams } from "../../helpers/const";

SwiperCore.use([Navigation, A11y, Autoplay]);

const SwiperShowcase: React.FC = () => (
  <Swiper
    breakpoints={indexShowcaseParams.breakpoints}
    navigation={indexShowcaseParams.navigation}
    a11y={indexShowcaseParams.a11y}
    className={indexShowcaseParams.className}
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
);

export default SwiperShowcase;
