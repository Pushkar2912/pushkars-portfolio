import React, { Children } from 'react'


const Project = ({ title, subTitle, linkTitle, link, children }) => {
  return (
    <div className='p-6 flex flex-col gap-2'>
      <div className='flex flex-col gap-0.5 mb-2'>
        <div className='text-2xl text-gray-200 font-medium text-heading'>
          {title}
        </div>
        <div className='text-sm text-slate-400 '>
          {subTitle}
        </div>
      </div>
      <p className='text-slate-400'>
        {children}
      </p>
        <a className='text-slate-300 hover:text-orange-500 transition-colors w-fit underline underline-offset-1 mt-1' href={link}>{linkTitle}</a>
    </div>
  )
}

export default Project