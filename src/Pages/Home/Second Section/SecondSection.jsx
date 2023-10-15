import React from 'react';
import img1 from '../../../assets/snk/snk-1-upto.png'
import img2 from '../../../assets/snk/snk-2-upto.png'
import img3 from '../../../assets/snk/snk-3-upto.png'
// import img4 from '../../../assets/snk/snk-4-upto.png'
// import img5 from '../../../assets/snk/snk-5-upto.png'
// import img6 from '../../../assets/snk/snk-6-upto.png'
const SecondSection = () => {
    return (
        // <h2>this is second section</h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:my-16 lg:ml-24'>

            {/* className="rounded-md hover:scale-110 transition duration-500 cursor-pointer " */}
            <div>
                <div style={{ width: '300px' }}>
                    <img className="rounded-md hover:scale-110 transition duration-500 cursor-pointer " src={img1} alt="" />
                </div>
                <div style={{ width: '300px', height: '200px' }} className='mt-0 text-center bg-gray-300'>
                    <h2 className='font-serif  text-gray-700'>SPORTY</h2>
                    <h2 className='font-serif  text-gray-700'>BEST FOR SPORTY GUY</h2>
                </div>
            </div>
            <div>

                <div style={{ width: '300px', height: '200px' }} className='mt-0 text-center bg-gray-300'>
                    <h2 className='font-serif  text-gray-700'>RUNNER MASTER</h2>
                    <h2 className='font-serif  text-gray-700'>HELPFUL FOR RUN FAST</h2>
                </div>
                <div style={{ width: '300px' }}>
                    <img className="rounded-md hover:scale-110 transition duration-500 cursor-pointer " src={img2} alt="" />
                </div>
            </div>
            <div>
                <div style={{ width: '300px' }}>
                    <img className="rounded-md hover:scale-110 transition duration-500 cursor-pointer " src={img3} alt="" />
                </div>
                <div style={{ width: '300px', height: '200px' }} className='mt-0 text-center bg-gray-300'>
                    <h2 className='font-serif  text-gray-700'>CLASSY</h2>
                    <h2 className='font-serif  text-gray-700'>BEST FOR WALK IN NORMAL WAY</h2>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;