import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import videoType from "../Types/videoType";

function VideoCard({ video }) {
  return (
    <div className="Video-card">
      <div className="Video-container">
        <ReactPlayer
          className="video-react-player"
          url={video.url}
          width="89%"
          height="89%"
        />
        <h2>{video.title}</h2>
      </div>

      <div className="video-text-container">
        <Link to={`/videos/${video.id}`} className="Video-link">
          <h3 className="Video-title">{video.titre}</h3>
        </Link>
        <p className="Video-description">{video.description}</p>
        <p className="Video-date">{video.release_date}</p>
      </div>
      <button type="button" className="main-btn video-btn">
        <Link to={`/videos/${video.id}`} className="Video-link">
          Plus de détails
        </Link>
      </button>
    </div>
  );
}

VideoCard.propTypes = {
  video: PropTypes.instanceOf(videoType).isRequired,
};

export default VideoCard;
