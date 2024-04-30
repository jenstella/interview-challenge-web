export const Video = ({ video, handleVideoClick, limitCharacters }) => {
    return (
      <a
        href="#"
        onClick={() => handleVideoClick(video)}
        className="videoLink"
      >
        <div className="videoContainer">
          <img
            className={`videoImage ${index === 0 ? "new" : ""}`}
            src={
              window.innerWidth > 768
                ? video.images.medium
                : video.images.small
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