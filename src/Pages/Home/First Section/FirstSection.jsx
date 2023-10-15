import React from 'react';
import { FaTruck, FaHeadphones, FaGift } from 'react-icons/fa';
const FirstSection = () => {
    return (
        <>
            <h2 className='text-center font-bold text-2xl my-16'>OUR PROVIDING SERVICES</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 my-16'>
                <div>
                    <div style={{ borderRadius: '50px 50px 50px 50px', width: '100px', height: '100px' }} className='bg-gray-300 ml-40'>
                        <FaTruck className=' w-1/2 h-24 ml-6'></FaTruck>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-semibold  my-2'>FREE SHIPPING</h2>
                        <h1 style={{ fontSize: '13px' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, minus. Architecto beatae maiores obcaecati et nam inventore veniam? Cupiditate sequi alias ipsum totam consequatur vitae aliquam vel architecto voluptatem eaque.</h1>
                    </div>
                </div>
                <div>
                    <div style={{ borderRadius: '50px 50px 50px 50px', width: '100px', height: '100px' }} className='bg-gray-300 ml-40'>
                        <FaHeadphones className='w-1/2 h-24 ml-6'></FaHeadphones>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-semibold  my-2'>PREMIUM SUPPORT</h2>
                        <h1 style={{ fontSize: '13px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto similique ipsa eum odio ad velit corporis, suscipit vitae dignissimos cupiditate natus dolores nesciunt voluptatum quas voluptate harum ratione in nemo!</h1>
                    </div>
                </div>
                <div>
                    <div style={{ borderRadius: '50px 50px 50px 50px', width: '100px', height: '100px' }} className='bg-gray-300 ml-40'>
                        <FaGift className='w-1/2 h-24 ml-6'></FaGift>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-semibold  my-2'>MEMBER DISCOUNT</h2>
                        <h1 style={{ fontSize: '13px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat consectetur odio quo minus quisquam tempora natus eveniet at impedit eum, reiciendis laborum commodi? Consectetur soluta distinctio, natus a commodi deleniti.</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FirstSection;