import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import img1 from '../../../assets/caro-1-upto.png'
import img2 from '../../../assets/caro-2-upto.png'
import img3 from '../../../assets/caro-3-upto.png'
import img4 from '../../../assets/caro-4-upto.png'
import img5 from '../../../assets/caro-5-upto.png'


const Banner = () => {
    return (
        <Carousel autoPlay>
            <div>
                <img src={img1} />

            </div>
            <div>
                <img src={img2} />

            </div>
            <div>
                <img src={img3} />

            </div>
            <div>
                <img src={img4} />

            </div>
            <div>
                <img src={img5} />

            </div>
        </Carousel>
    );
};

export default Banner;