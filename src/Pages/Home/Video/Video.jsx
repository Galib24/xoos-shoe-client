import React from 'react';
import videoBg from '../../../assets/Videos/myvideo.mp4'
import { BsSearch } from "react-icons/bs";
import './Video.css'
const Video = () => {
    return (
        <div className='main max-w-screen-2xl'>
            <div className="overlay"></div>
            <video  src={videoBg} autoPlay loop muted></video>
            {/* input filed  */}
            <div
                className="grid grid-cols-12 top-64 right-96 bg-white shadow-sm absolute py-4 px-28 rounded-full mt-8 lg:mt-16">
                {/* icon */}
                <div
                    className="flex items-center justify-center col-span-2 lg:col-auto">
                    <BsSearch className="text-2xl text-gray-500" />
                </div>
                {/* icon */}

                {/* input */}
                <div
                    className="col-span-10 lg:col-span-8 flex items-center justify-center">
                    <input
                        className="w-full px-4 lg:px-6 py-2 lg:py-3 border rounded-lg outline-none focus:border-transparent focus:ring-2 focus:ring-gray-50 mr-4 lg:mr-0"
                        type="text"
                        name="text"
                        id=""
                        placeholder="job title, keyword or company" />
                </div>
                {/* input */}

                {/* btn */}
                <div
                    
                    className="col-span-4 lg:col-span-3 lg:flex justify-center items-center mx-2 lg:mx-5 hidden">
                    <button
                        className="bg-[#40e1f9] hover:bg-[#40e1f9] text-white w-full rounded-full lg:py-3 lg:px-4 flex items-center justify-center text-center lg:font-bold font-semibold">
                        Find Job
                    </button>
                </div>
                {/* btn */}

            </div>
        </div>
    );
};

export default Video;