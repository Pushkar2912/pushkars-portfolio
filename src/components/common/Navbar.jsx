import React from 'react'
import { IoMail } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../utils/paths';
import { FaCode } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div
            className="
                flex justify-between items-center border-b p-6 border-gray-500 
                sticky top-0 left-0 w-full bg-gray-800 z-10
                bg-opacity-10 backdrop-blur-md
                "
        >
            <NavLink to={PATHS.HOME} className='nav-title text-white font-sans font-medium'>
                <FaCode className='text-orange-600' size={32} />
            </NavLink>
            <div className='flex gap-6'>
                <NavLink to={PATHS.HOME} className='text-gray-400 hover:text-white cursor-pointer'>
                    Home
                </NavLink>
                <div className='text-gray-400'>|</div>
                <NavLink to={PATHS.ABOUT} className='text-gray-400 hover:text-white  cursor-pointer'>
                    About
                </NavLink>
                <div className='text-gray-400'>|</div>
                <NavLink to={PATHS.PROJECTS} className='text-gray-400 hover:text-white  cursor-pointer'>
                    Projects
                </NavLink>
            </div>
            <NavLink to={PATHS.CONTACT} className='text-gray-400 hover:text-white'>Get In Touch</NavLink>
        </div>

    )
}

export default Navbar