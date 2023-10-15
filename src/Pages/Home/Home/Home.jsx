import React from 'react';
import Banner from '../Banner/Banner';
import FirstSection from '../First Section/FirstSection';
import SecondSection from '../Second Section/SecondSection';
import ThirdSection from '../Third Section/ThirdSection';
// 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
        </div>
    );
};

export default Home;