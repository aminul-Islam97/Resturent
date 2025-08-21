import React from "react";
import "./VideoSection.css";

import videoBg from "../assets/video.jpg";

const VideoSection = () => {
  const handlePlay = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <section
      className="video-section"
      style={{ backgroundImage: `url(${videoBg})` }}
    >
      <div className="overlay"></div>
      <div className="play-btn" onClick={handlePlay}>
        <span className="play-icon">&#9658;</span>
      </div>
    </section>
  );
};

export default VideoSection;

