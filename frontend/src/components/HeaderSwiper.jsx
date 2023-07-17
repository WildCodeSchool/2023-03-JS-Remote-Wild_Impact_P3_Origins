/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFlip } from "swiper/modules";
import connexion from "../services/connexion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function HeaderSwiper() {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const videosData = await connexion.get("/videos");
      setVideos(videosData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideos();
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
        {videos.slice(1, 4).map((Video) => (
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
