/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Navigation, Autoplay, EffectFlip } from "swiper/modules";

function HeaderSwiper() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/videos`)
      .then((data) => data.json())
      .then((data) => setVideo(data));
  }, []);

  return (
    <div className="player-wrapper">
      <Swiper
        spaceBetween={150}
        slidesPerView={1}
        effect="effect-fade"
        grabCursor
        autoplay={{
          delay: 10000,
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
        {video.slice(1, 4).map((Video) => (
          <SwiperSlide key={Video.id}>
            <ReactPlayer
              className="react-player"
              url={Video.url}
              width="80%"
              height="80%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeaderSwiper;
