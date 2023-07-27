/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFlip } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
import connexion from "../services/connexion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function FavorisSwiper() {
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
    <div className="Favoris-container">
      <div className="Favoris-title">
        <h2>League of Legends</h2>
      </div>
      <div className="Favoris-wrapper">
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
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
          {videos.slice(1, 5).map((Video) => (
            <SwiperSlide key={Video.id} className="Favoris-Swiper">
              <div className="video-description">
                <h3 className="descript-title">{Video.title}</h3>
                <p className="descript-text">{Video.description}</p>
              </div>
              <AiFillStar />

              <ReactPlayer
                className="react-player-favoris"
                url={Video.url}
                width="100%"
                height="100%"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FavorisSwiper;
