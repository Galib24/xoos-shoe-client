import { Rating } from '@smastrom/react-rating';
import { data } from 'autoprefixer';
import '@smastrom/react-rating/style.css'
import React, { useEffect, useState } from 'react';
import { FaCartPlus, FaRegEye, FaVectorSquare } from 'react-icons/fa';
const ThirdSection = () => {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setAllData(data)
            })
    }, [])
    console.log(allData);
    return (
        <div>
            <div className='text-center mt-28'>
                <h2 className='font-bold text-2xl'>OUR NEW PRODUCTS</h2>
                <h1>Per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clar
                </h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12'>
                {
                    allData.map(item => <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="group hover:scale-110 transition duration-500 relative cursor-pointer">
                            <img className='w-full h-auto rounded-md' src={item.image} alt="Shoes" />
                            <div className="hidden absolute inset-0  items-center justify-center group-hover:flex">


                                <div className="text-white text-2xl bg-black bg-opacity-70 rounded-full p-2 ml-2">

                                    <FaCartPlus></FaCartPlus>

                                </div>

                                <div className="text-white text-2xl bg-black bg-opacity-70 rounded-full p-2 ml-2">

                                    {/* <h2>m</h2> */}
                                    <FaRegEye></FaRegEye>
                                </div>
                                <div className="text-white text-2xl bg-black bg-opacity-70 rounded-full p-2 ml-2">

                                    {/* <h2>l</h2> */}
                                    <FaVectorSquare></FaVectorSquare>
                                </div>
                            </div>
                        </div>
                        <div className="card-body ">
                            <h2 className="card-title">
                                {item.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                          <div style={{width: '100px'}} className='absolute right-0 top-0'>
                          <Rating
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                
                                readOnly
                            />
                          </div>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Price: ${item.price}</div>
                                <div className="badge badge-outline">Rating: {item.rating}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ThirdSection;