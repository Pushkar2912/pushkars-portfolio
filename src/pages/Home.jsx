import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import PushkarImg from '../assets/pushkar.png'
import { Link } from 'react-router-dom';
import { PATHS } from '../utils/paths';

const Home = () => {
    return (
        <div className='mt-20 flex p-6 gap-20'>
            <div className='flex-1 w-full flex flex-col justify-center gap-10'>
                <div className=' flex flex-col justify-center gap-2'>
                    <div className='text-white text-xl'>
                        Front-End Developer
                    </div>
                    <div className='text-white font-medium text-6xl text-heading'>
                        I Build Scalable Web Apps
                    </div>
                </div>
                <Link to={PATHS.CONTACT} className='group bg-orange-600 hover:bg-orange-700 w-fit text-white px-4 py-3 rounded-[25px] flex items-center justify-center gap-4 hover:gap-6 transition-colors'>
                        Get In Touch <BsArrowRight className='group-hover:ml-2 transition-all' size={20} />
                </Link>
            </div>
            <div className='relative mr-5 group'>
                <img className='h-[500px] rounded-md z-10 relative' src={PushkarImg} />
                <div className='absolute group-hover:top-3 group-hover:-right-3 transition-all top-5 -right-5 w-full h-full bg-gray-900 rounded-md'></div>
            </div>
        

        </div>
    )
}

export default Home