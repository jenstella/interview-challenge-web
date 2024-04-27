import { useEffect, useState } from "react";

export const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data.json");
        const jsonData = await response.json();
        setData(jsonData.data); // Accessing the 'data' property of the JSON object
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const limitCharacters = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <div className="container">
      {/* Check if data is loaded before rendering */}
      <div className="topHalf">
        <div className="content">
          <h2 className="bibleProject">BibleProject</h2>
          <h1 className="title">Video Series Title</h1>
          <div className="break"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
      </div>

      {data && data.videoCategory && (
        // Mapping over the array of videos
        <div className="bottomHalf">
          {data.videoCategory.videos.map((video) => (
            <div className="videoContainer" key={video.id}>
              <img
                className="videoImage"
                src={
                  window.innerWidth > 768
                    ? video.images.medium
                    : video.images.small
                }
                alt={video.title}
              />
              <h3>{video.title}</h3>
              <div className="videoDesc">
                {limitCharacters(video.description, 140)}
              </div>
              <div className="length">5 minutes</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
