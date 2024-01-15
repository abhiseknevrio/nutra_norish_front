import React from 'react'

const Button = ({ text }) => {
    return (
        <div className='bg-btnBg inline-block px-9 py-5 rounded-full'>
            <div className='flex gap-4'>
                <div className='font-bold text-lg text-textWhite'>{text}</div>
                <img src="/images/rightArrow.svg" alt="" />
            </div>
        </div>
    )
}

export default Button