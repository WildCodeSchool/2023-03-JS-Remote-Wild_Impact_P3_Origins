import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import connexion from "../../services/connexion";
import ReactPlayer from "react-player";
import "../../scss/Videopage.scss"

function Videopage() {
  const { id } = useParams();
  const [video, setVideo] = useState([]);

  const getVideo = async () => {
    const VideoData = await connexion.get(`/videos/${id}`);
    try {
      if (VideoData) {
        setVideo(VideoData);
      }
    } catch (error) {
      toast.error("Une erreur est survenue, pas de chance.");
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="Video-container">
      <ReactPlayer
        className="video-react-player"
        url={video.url}
        width="90%"
        height="90%"
      />
      <h2>{video.title}</h2>
    </div>
  )
}

export default Videopage;
