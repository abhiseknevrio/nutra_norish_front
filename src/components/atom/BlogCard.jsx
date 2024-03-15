import React from 'react'

const BlogCard = ({ title, img, link, by, date, bg }) => {
    return (
        <div className='p-6 md:mr-6' style={{ background: bg }}>
            <img loading='lazy' className='aspect-video' src={img} alt={title} />
            <div className='mt-5 text-base font-semibold'>{date} - {by}</div>
            <div className='mt-3 mb-7 text-lg font-bold'>{title}</div>
            <a target='_blank' rel="noreferrer" href={link} className='underline text-base font-semibold'>Read More</a>
        </div >
    )
}

export default BlogCard;