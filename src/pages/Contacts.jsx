import React from 'react'
import { Link } from 'react-router-dom'

const Contacts = () => {
    return (
        <div className='p-6 flex flex-col gap-4'>
            <div>
                <div className='text-white text-xl font-semibold'>
                    Email
                </div>
                <div className='text-white'>
                    pushkar2912@gmail.com
                </div>
            </div>
            <div>
                <div className='text-white text-xl font-semibold'>
                    Phone No
                </div>
                <div className='text-white'>
                    9175099530
                </div>
            </div>
            <div>
                <div className='text-white text-xl font-semibold'>
                    Git Hub
                </div>
               <div className='text-white'>
                    <a href="http://github.com/Pushkar2912">Pushkar2912</a>
               </div>
            </div>
            <div>
                <div className='text-white text-xl font-semibold'>
                    LinkedIn
                </div>
                <div className='text-white'>
                    <a href="http://www.linkedin.com/in/pushkar-deshpande-8920bb1b6">www.linkedin.com/in/pushkar-deshpande</a>
                </div>
            </div>
        </div>
    )
}

export default Contacts