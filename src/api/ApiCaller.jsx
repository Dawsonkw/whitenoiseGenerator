import React, { useEffect, useState } from 'react';


const maxResults = 5;
const searchTerm = 'DnD Ambiance Music';
const apiKey =  'AIzaSyBH3fhMeooXeqOgTgRxGQ1EE19lm2ohAm411';
const API_URL  =  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${searchTerm}&type=video&key=${apiKey}`;

// Idea is that clicking the tags will add search terms to the URL which will then display the videos of that type



function ApiCaller() {

    const[videos, setVideos] = useState([])
    
    useEffect(() => {
        async function getData() {
            const response = await fetch(API_URL)
            const jsonData = await response.json();
            console.log(jsonData)
            setVideos(jsonData.items)
        }

        getData();
    }, [])


    return (
        <div>
            {videos.map((video) => (
                <div key={video.id.videoId}>
                    <h3>{video.snippet.title}</h3>
                    <p>{video.snippet.description}</p>
                    
                    <iframe 
                        width='560' 
                        height='315' 
                        src={`https://www.youtube.com/embed/${video.id.videoId}`} 
                        title={video.snippet.title}
                        frameborder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    );
}

export default ApiCaller;
    




//youtubeAPI key: 

// https://www.googleapis.com/youtube/v3/videos
// endpoints @ https://developers.google.com/youtube/v3/docs/videos/list