

import React from "react";

const VideoPlay = ({selectedVideo}) => {

    return(
        <div className="videoplay">
        {
              selectedVideo && (
                  <div> 
                      <iframe src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} />
                      <h3>{selectedVideo.snippet.title}</h3>
                      <p>{selectedVideo.snippet.description}</p>
                  </div>
              )
        }
  </div>
    )
}

export default VideoPlay;