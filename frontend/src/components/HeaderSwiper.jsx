import React from "react";
import ReactPlayer from "react-player";

function HeaderSwiper() {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/live/NSU11kxxJvc?feature=share"
        width="90%"
        height="90%"
      />
    </div>
  );
}

export default HeaderSwiper;
