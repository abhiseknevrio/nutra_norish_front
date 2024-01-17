import React from 'react'

const BlogCard = ({ title, img, link, by, date, bg }) => {
    return (
        <div className='p-6' style={{ background: bg, width: "422px", height: "472px" }}>
            <div className='flex justify-center'>
                <img src={img} alt={title} />
            </div>
            <div className='mt-5 font-semibold'>{date} - {by}</div>
            <div className='mt-3 text-18px font-bold' style={{ width: "334px" }}>{title}</div>
            <a target='_blank' rel="noreferrer" href={link} className='underline mt-5 font-semibold'>Read More</a>
        </div >
    )
}

export default BlogCard