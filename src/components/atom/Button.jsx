import React from 'react'

const Button = ({ text }) => {
    return (
        <div className='bg-btnBg inline-block px-9 py-5 rounded-full'>
            <div className='flex gap-4'>
                <div className='font-bold text-lg text-nutraWhite'>{text}</div>
                <img src="https://cdn.shopify.com/s/files/1/0606/0703/7648/files/btnArrow-rr.svg" alt="" />
            </div>
        </div>
    )
}

export default Button