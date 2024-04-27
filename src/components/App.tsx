import { useEffect, useState } from "react";

export const App = () => {
  const [data, setData] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data.json");
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const limitCharacters = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container">
      <div className="topHalf">
        <div className="content">
          <h2 className="bibleProject">BibleProject</h2>
          <h1 className="title">Video Series Title</h1>
          <div className="break"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      </div>

      <div className="bottomHalf">
        {data &&
          data.videoCategory &&
          data.videoCategory.videos.map((video, index) => (
            <a
              key={video.id}
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
          ))}
      </div>

      {selectedVideo && (
        <div className="rightBanner">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </div>
  );
};
