import React from 'react'


const Card = ({ title, college, completed, marks }) => {
    return (
        <div className='flex  flex-col gap-2 container border border-gray-500 p-4 rounded-md'>
            <div className='flex justify-between'>
                <div className='title text-white font-semibold'>
                    {title}
                </div>
                <div className='percentage text-white font-semibold text-sm'>
                    {marks}
                </div>
            </div>
            <div className='completed text-slate-400 text-xs'>
                {completed}
            </div>
            <div className='text-slate-400 text-sm'>
                {college}
            </div>
        </div>
    )
}

export default Card