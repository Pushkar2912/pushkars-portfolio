import React, { Children } from 'react'


const Project = ({title, subTitle, linkTitle, link, children}) => {
  return (
    <div className='p-6 flex flex-col gap-2'>
        <div className='text-2xl text-white font-semibold'>
            {title}
        </div>
        <div className='text-sm text-white'>
            {subTitle}
        </div>
        <div>
          {children}
        </div>
        <div className='text-white underline underline-offset-1'>
            <a href={link}>{linkTitle}</a>
        </div>
    </div>
  )
}

export default Project