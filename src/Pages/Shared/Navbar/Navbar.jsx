import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    // change scroll navbar
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    const navOption = <>
        <li>
            <div className="w-fit">
                <select className="bg-transparent cursor-pointer">
                    <option>Buy a Business</option>
                    <option className='p-2 m-2'>Search For Business</option>
                    
                </select>
            </div>
        </li>
        <li>
            <a>COLLECTIONS</a>
        </li>
        <li><a>PRODUCTS</a></li>
        <li><a>SHORT CODE</a></li>
        <li><a>BLOGS</a></li>
        <li><a>PAGES</a></li>
    </>
    return (
        <>
            <div className={color ? 'header navbar' : 'header-bg  navbar'}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">XOOS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className={color ? "navbar-end w-1/2 text-xl h-full text-[#212529]  bg-[#774e88] translate-x-4 -skew-x-12 origin-left p-10 " : 'navbar-end'}>

                    <a className="btn mr-10">Get Start</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;