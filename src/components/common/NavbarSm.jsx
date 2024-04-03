import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { FcAbout } from "react-icons/fc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PATHS } from '../../utils/paths';
import { FaCode } from 'react-icons/fa6';

const NavbarSm = () => {
    return (
        <div className='md:hidden lg:hidden  flex border-b p-6 border-gray-500 
        sticky top-0 left-0 w-full bg-gray-800 z-10
        bg-opacity-10 backdrop-blur-md'>
            <NavLink to={PATHS.HOME} className='nav-title text-white font-sans font-medium'>
                <FaCode className='text-orange-600' size={32} />
            </NavLink>
            <div className='flex items-center justify-end w-full gap-4'>
                <NavLink className='text-gray-400 hover:text-white  cursor-pointer' to={PATHS.HOME}>
                    <IoHomeOutline className='text-gray-400' size={21} />
                </NavLink>

                <NavLink className='text-gray-400 hover:text-white  cursor-pointer' to={PATHS.ABOUT}>
                    <FcAbout className='text-gray-400' size={21} />
                </NavLink>

                <NavLink className='text-gray-400 hover:text-white  cursor-pointer' to={PATHS.PROJECTS}>
                    <GoProjectRoadmap className='text-gray-400' size={21} />
                </NavLink>

                <NavLink className='text-gray-400 hover:text-white  cursor-pointer' to={PATHS.CONTACT}>
                    <IoIosHelpCircleOutline className='text-gray-400' size={21} />
                </NavLink>
            </div>
        </div>
    )
}

export default NavbarSm