import React from 'react'

const BlogCard = ({ title, img, link, by, date, bg }) => {
    return (
        <div className='blogCard' style={{ background: bg }}>
            <div className='flex justify-center'>
                <img src={img} alt={title} />
            </div>
            <div className='mt-5 font-semibold'>{date} - {by}</div>
            <div className='mt-3 mb-7 text-18px font-bold'>{title}</div>
            <a target='_blank' rel="noreferrer" href={link} className='underline font-semibold'>Read More</a>
        </div >
    )
}

export default BlogCard