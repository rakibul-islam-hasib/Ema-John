import React from 'react';
import logo from '../../assets/images/Logo.svg'
const NavBar = () => {
    return (
        <nav className='bg-[#1C2B35] w-full sticky top-0 z-10 '>
            <div className="w-[90%] mx-auto flex items-center justify-between px-3 py-3">
                <div className="">
                    <img src={logo} alt="" />
                </div>
                <div className="text-white">
                    <ul className='flex gap-3'>
                        <li><a href="">Order</a></li>
                        <li><a href="">Order Review</a></li>
                        <li><a href="">Manage Inventory</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;