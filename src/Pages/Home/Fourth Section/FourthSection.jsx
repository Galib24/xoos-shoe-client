import React from 'react';
import blog1Img from '../../../assets/blog1.jpg'
import './FourthSection.css'
const FourthSection = () => {
    return (
        <div className="First-blog-item w-full bg-fixed text-white pt-8 my-20">
    
      <div className="md:flex justify-center items-center bg-gray-500 bg-opacity-50 py-20 px-36 pb-20 pt-12">
    
            
          <div>
          <img className="w-3/4" src={blog1Img} alt="" />
          </div>
            
        
        <div className="text-black">
           <strong> <p className='text-gray-300'>October 15, 2023</p></strong>
           <strong className="font-bold text-gray-300"> <p>We want to make our client satisfy </p></strong>
       <p className='text-gray-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, nobis voluptate cumque dolorum provident numquam modi maxime asperiores in suscipit dolorem quisquam nulla laborum architecto! Quasi soluta vitae nulla nostrum asperiores dicta quod? Eligendi vel adipisci sit corrupti consectetur in soluta, eaque quisquam, vero corporis aperiam aliquid repellat est quas.</p>
       <button className="btn btn-outline border-0 border-b-4 mt-4 btn-info text-black">Show More</button>
        </div>
      </div>
    </div>
    );
};

export default FourthSection;