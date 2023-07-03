
const VideoList = ({videos, setSelectedVideo}) =>{

  return(
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
    )
}

export default VideoList;