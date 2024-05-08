import { useEffect, useState } from "react";
import Video from "./Video";

export const App = () => {
  // state variables to store fetched data and selected video
  const [data, setData] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // function to fetch data async
    const fetchData = async () => {
      try {
        // which endpoint to fetch data from
        const response = await fetch("/api/data.json");
        // parse JSON data from the response
        const jsonData = await response.json();
        // use the data state variable with the fetched data
        setData(jsonData.data);
      } catch (error) {
        // log any errors that occur fetching data
        console.error("Error fetching data:", error);
      }
    };
    // call the function when the component mounts
    fetchData();
    // the empty dependency array makes sure useEffect runs only *once* on component mount
  }, []);

  // event handler to handle click on the video items
  const handleVideoClick = (video) => {
    // Simulate random failure if debug parameter is present in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("debug")) {
      const random = Math.random();
      if (random < 0.5) {
        // Fail randomly 50% of the time
        console.error("Failed to handle video click.");
        return; // Exit early if failure occurs
      }
    }
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
        {/* conditionally render the iframe if a video is clicked */}
        {selectedVideo && (
          <div className="rightBanner">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      <div className="bottomHalf">
        {data &&
          data.videoCategory &&
          data.videoCategory.videos.map((video, index) => (
            <Video
              key={video.id}
              video={video}
              isNew={index === 0}
              handleClick={handleVideoClick}
            />
          ))}
      </div>
    </div>
  );
};
