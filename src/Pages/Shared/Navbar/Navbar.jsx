import React from 'react';

const Navbar = () => {
    const navOption = <>
        <li><a>HOME</a></li>
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
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
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
                <div className="navbar-end">
                    <a className="btn">Get Start</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;