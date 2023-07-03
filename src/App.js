
import React,{useState, useEffect} from "react";
import Searchbar from "./Components/Searchbar";
import VideoList from "./Components/VideoList";
import VideoPlay from "./Components/VideoPlay";

const App = () => {
    const [videos, setVideos] = useState("");
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        setSelectedVideo(videos[0])
  }, [videos]
  )

  


    return(
        <div>
            <Searchbar  setVideos={setVideos}/>

            <div className="videos">

                <VideoPlay selectedVideo={selectedVideo} />
                <VideoList videos={videos}  setSelectedVideo={setSelectedVideo} />

            </div>
        </div>
    )
}

export default App;