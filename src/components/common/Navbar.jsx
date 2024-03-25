import React from 'react'
import { IoMail } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../utils/paths';



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
                PMD
            </NavLink>
            <div className='flex gap-6'>
                <NavLink to={PATHS.HOME} className='text-[#c1c0c0] hover:text-white cursor-pointer'>
                    Home
                </NavLink>
                <NavLink to={PATHS.ABOUT} className='text-[#c1c0c0] hover:text-white  cursor-pointer'>
                    About
                </NavLink>
                <NavLink to={PATHS.PROJECTS} className='text-[#c1c0c0] hover:text-white  cursor-pointer'>
                    Projects
                </NavLink>
            </div>
            <div className='text-white flex items-center gap-2'>
                <div className='h-10 w-10 bg-orange-600 rounded-[25px] flex justify-center items-center'>
                    <IoMail size={24} />
                </div>
                <div className='text-xs'>
                    pushkar2912@gmail.com
                </div>
            </div>
        </div>

    )
}

export default Navbar