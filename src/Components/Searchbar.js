
import React, {useState, useEffect} from 'react';
import axios from "axios";

const Searchbar = ({setVideos}) => {
   const [searchValue, setSearchValue] = useState("JavaScript");

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
        <div className="searchbar">
                <input type="text" placeholder="Search..." 
               
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button type="submit"
                 onClick={implementVideoSearch}
                >Search</button>
        </div>
    )
}

export default Searchbar;