import React from 'react';


const apiKey =  'AIzaSyDQuP0OnvR07rjQhjMXqRqktVq34LhWqq8'
const API_URL  =  `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${apiKey}`



async function ApiCaller(props) {
    const response = await fetch(API_URL)
    const jsonData = await response.json();
    console.log(jsonData)


    return (
        <div>
            API
        </div>
    );
}

export default ApiCaller;
    




//youtubeAPI key: 

// https://www.googleapis.com/youtube/v3/videos
// endpoints @ https://developers.google.com/youtube/v3/docs/videos/list