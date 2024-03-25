import React from 'react'
import { Link } from 'react-router-dom'

const Contacts = () => {
    return (
        <div className='p-6 flex flex-col gap-4'>
            <div>
                <div className='text-slate-100 font-medium'>
                    Email
                </div>
                <div className='text-gray-400'>
                    pushkar2912@gmail.com
                </div>
            </div>
            <div>
                <div className='text-slate-100 font-medium'>
                    Phone No
                </div>
                <div className='text-gray-400'>
                    9175099530
                </div>
            </div>
            <div>
                <div className='text-slate-100 font-medium'>
                    Git Hub
                </div>
               <div className='text-gray-400'>
                    <a className='hover:underline underline-offset-1 hover:text-orange-600' href="http://github.com/Pushkar2912">Pushkar2912</a>
               </div>
            </div>
            <div>
                <div className='text-slate-100 font-medium'>
                    LinkedIn
                </div>
                <div className='text-gray-400'>
                    <a className='hover:underline underline-offset-1 hover:text-orange-600' href="http://www.linkedin.com/in/pushkar-deshpande-8920bb1b6">www.linkedin.com/in/pushkar-deshpande</a>
                </div>
            </div>
        </div>
    )
}

export default Contacts