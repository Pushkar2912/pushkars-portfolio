import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import PushkarImg from '../assets/pushkar.png'
import { Link } from 'react-router-dom';
import { PATHS } from '../utils/paths';

const Home = () => {
    return (
        <div className='mt-20 flex p-6 gap-20'>
            <div>
                <img className='h-[500px]' src={PushkarImg} />
            </div>
            <div className='flex-1 w-full flex flex-col justify-center gap-10'>
                <div className=' flex flex-col justify-center gap-2'>
                    <div className='text-white text-xl'>
                        Front-End Developer
                    </div>
                    <div className='text-white font-semibold text-[50px]'>
                        I Build Scalable Web Apps
                    </div>
                </div>
                <Link to={PATHS.CONTACT}>
                    <button className='bg-orange-600 hover:bg-orange-700 w-40 text-white px-4 py-3 rounded-[25px] flex justify-center gap-2'>
                        Get In Touch <BsArrowRight size={20} />
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Home