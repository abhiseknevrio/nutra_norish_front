import React from 'react'

const VideosCard = ({ title, img, link }) => {
    return (
        <a href={link} target='_blank' rel="noreferrer">
            <div className='md:ml-10'>
                <div className='flex justify-center'>
                    <img className='rounded-2xl min-w-full' src={img} alt={title} />
                </div>
                <div className='mt-30 text-lg font-bold boreder-l-5 pl-3'>{title}</div>
            </div>
        </a >
    )
}

export default VideosCard