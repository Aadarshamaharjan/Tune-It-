import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return null;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div class="thuloYT">
            <div className='ui embed'>
                <iframe class="thuloYT" height="500px" width="800px" src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;