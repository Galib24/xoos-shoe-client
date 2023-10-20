import React from 'react';
import Banner from '../Banner/Banner';
import FirstSection from '../First Section/FirstSection';
import SecondSection from '../Second Section/SecondSection';
import ThirdSection from '../Third Section/ThirdSection';
import FourthSection from '../Fourth Section/FourthSection';
import Video from '../Video/Video';
// 

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Video></Video>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <FourthSection></FourthSection>
        </div>
    );
};

export default Home;