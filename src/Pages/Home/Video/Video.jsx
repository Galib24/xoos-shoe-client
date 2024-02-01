import React from 'react';
import videoBg from '../../../assets/Videos/myvideo.mp4'
import { BsSearch } from "react-icons/bs";
import './Video.css'
const Video = () => {
    return (
        <div className='main max-w-screen-2xl'>
            <video className='video' src={videoBg} autoPlay loop muted></video>
            <div className="overlay"></div>
            {/* input filed  */}
            <div>
                <div

                    className="grid grid-cols-12 top-72 right-52 left-52 overflow-hidden  mathew  shadow-lg absolute py-8 px-28 rounded-full mt-8 lg:mt-16">
                    <div  className='flex  gap-3 '>
                        <div style={{border: '1px solid black'}} className="w-fit mathewMan">
                            <select style={{padding: '10px 8px'}} className="bg-transparent cursor-pointer">
                                <option>Buy a Business</option>
                                <option>Search For Business</option>

                            </select>
                        </div>
                        <div className="w-fit mathewMan">
                            <select style={{padding: '10px 8px'}} className="bg-transparent cursor-pointer">
                                <option>Buy a Business</option>
                                <option>Search For Business</option>

                            </select>
                        </div>
                        <div className="w-fit mathewMan">
                            <select style={{padding: '10px 8px'}} className="bg-transparent cursor-pointer">
                                <option>Buy a Business</option>
                                <option>Search For Business</option>

                            </select>
                        </div>
                       
                    </div>

                
                </div>
            </div>
        </div>
    );
};

export default Video;