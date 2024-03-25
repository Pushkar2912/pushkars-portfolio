import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import PushkarImg from '../assets/pushkar.png'
import { Link } from 'react-router-dom';
import { PATHS } from '../utils/paths';

const Home = () => {
    return (
        <div className='app-lower-containar flex justify-center items-center p-6'>
            <div className='flex-1 w-full flex flex-col justify-center gap-16'>
                <div className=''>
                    <div className='text-white text-xl  flex flex-col justify-center gap-4'>
                        <div className='flex flex-col'>
                            <p className='text-heading text-4xl'>Hi there, I am</p>
                            <p className='text-heading text-4xl text-orange-400'> Pushkar Deshpande.</p><br />
                        </div>
                        <p className='text-slate-400'>Highly motivated and results-oriented <span className='text-heading text-orange-400' >Front-End Developer</span><br/>
                            with  experience building user-friendly and interactive web applications.<br />
                            Proven ability to leverage a wide range of technologies and passionate about creating innovative solutions that enhance user experience
                        </p>
                    </div>
                </div>
                <Link to={PATHS.PROJECTS} className='group bg-orange-600 hover:bg-orange-700 w-fit text-white px-4 py-3 rounded-[25px] flex items-center justify-center gap-4 hover:gap-6 transition-colors'>
                    Projects <BsArrowRight className='group-hover:ml-2 transition-all' size={20} />
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