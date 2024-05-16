import React from "react";

//defining structure of a video object
interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  images: {
    medium: string;
    small: string;
  };
}

//define props expected by the video component
interface VideoProps {
  video: Video;
  isNew: boolean;
  handleClick: (video: Video) => void;
}

// a function to limit the characters in a string (used for the video descriptions)
const limitCharacters = (text: string, limit: number) => {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

//video component to render individual video items
const Video = ({ video, isNew, handleClick }) => {
  return (
    <a href="#" onClick={() => handleClick(video)} className="videoLink">
      <div className="videoContainer">
        {isNew && <div className="newLabel">NEW</div>}
        <img
          className="videoImage"
          src={
            window.innerWidth > 768 ? video.images.medium : video.images.small
          }
          alt={video.title}
        />
        <div className="textUnderVideo">
          <h3>{video.title}</h3>
          <div className="videoDesc">
            {limitCharacters(video.description, 140)}
          </div>
        </div>
        <div className="timePlay">
          <div className="length">5 minutes</div>
          <div className="playButton">&gt;</div>
        </div>
      </div>
    </a>
  );
};

export default Video;
