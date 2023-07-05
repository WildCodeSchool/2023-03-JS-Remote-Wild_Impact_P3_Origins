import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";

function Videospage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/videos`)
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <header className="header-container">
        <div className="main-title">
          <h2 className="header-title">Page des videos</h2>
        </div>
        <div className="Videos-container">
          <div className="Videos-main">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Videospage;
