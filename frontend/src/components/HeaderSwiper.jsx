/* eslint-disable import/no-unresolved */
import React from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Navigation, Autoplay, EffectFlip } from "swiper/modules";

function HeaderSwiper() {
  return (
    <div className="player-wrapper">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        effect="effect-fade"
        grabCursor
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        modules={[Pagination, Navigation, Autoplay, EffectFlip]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/Lvh28X0I4Jg"
            width="90%"
            height="90%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/KL_yIf5uiJo"
            width="90%"
            height="90%"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeaderSwiper;
