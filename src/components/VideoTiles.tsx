// import React from "react";

// export const VideoTiles = ({ data }) => {
//   const limitCharacters = (text, limit) => {
//     return text.length > limit ? text.slice(0, limit) + "..." : text;
//   };

//   return (
//     <div className="bottomHalf">
//       {data.videoCategory.videos.map((video) => (
//         <div className="videoContainer" key={video.id}>
//           <img
//             className="videoImage"
//             src={
//               window.innerWidth > 768
//                 ? video.images.medium
//                 : video.images.small
//             }
//             alt={video.title}
//           />
//           <h3>{video.title}</h3>
//           <div className="videoDesc">{limitCharacters(video.description, 140)}</div>
//           <div className="length">5 minutes</div>
//         </div>
//       ))}
//     </div>
//   );
// };