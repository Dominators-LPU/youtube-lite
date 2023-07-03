import React, {useState, useEffect} from "react";
import axios from "axios";

const App = () => {
    const [searchValue, setSearchValue] = useState("JavaScript");
    const [videos, setVideos] = useState("");
    const [selectedVideo, setSelectedVideo] = useState(null);


    useEffect(() => {
            setSelectedVideo(videos[0])
    }, [videos]
    )

    useEffect(() => {
        implementVideoSearch()
    },[])


     async  function implementVideoSearch() {
        let response =  await axios.get("https://www.googleapis.com/youtube/v3/search",{
            params:{
                 key: "AIzaSyB_s1Xn5GHTVerZT585e85u1Z0IG_oqlqs",
                 q : searchValue,
                 part: "snippet",
                 maxResults: 5,
                 type: "video",
            }
           })
           console.log(response.data.items)
           setVideos(response.data.items)
      }

    return(
        <div>
             <div className="searchbar">
                <input type="text" placeholder="Search..." 
               
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button type="submit"
                 onClick={implementVideoSearch}
                >Search</button>
             </div>

             <div className="videos">


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
    
    
                    <div className="videolist">
                         {
                            videos && (
                                videos.map((video) => (
                                    <img 
                                     onClick={()=>setSelectedVideo(video)}
                                    src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                                ))
                            )
                         }
                    </div>


            </div>

        </div>
    )
}

export default App;