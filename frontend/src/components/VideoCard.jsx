import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import videoType from "../Types/videoType";

function VideoCard({ video }) {
  return (
    <div className="Video-card">
      <ReactPlayer
        className="react-player-video-page"
        url={video.url}
        width="100%"
        height="100%"
      />

      <div className="video-text-container">
        <Link to={`/videos/${video.id}`} className="Video-link">
          <h3 className="Video-title">{video.titre}</h3>
        </Link>
        <p className="Video-description">{video.description}</p>
        <p className="Video-date">{video.release_date}</p>
      </div>
      <button type="button" className="details-btn">
        <Link to={`/videos/${video.id}`} className="Video-link">
          Voir la page du video
        </Link>
      </button>
    </div>
  );
}

VideoCard.propTypes = {
  video: PropTypes.instanceOf(videoType).isRequired,
};

export default VideoCard;
