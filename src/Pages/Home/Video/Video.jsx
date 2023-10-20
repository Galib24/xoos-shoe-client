import React from 'react';
import videoBg from '../../../assets/Videos/myvideo.mp4'
import './Video.css'
const Video = () => {
    return (
        <div className='main max-w-screen-2xl'>
            <video  src={videoBg} autoPlay loop muted></video>
        </div>
    );
};

export default Video;