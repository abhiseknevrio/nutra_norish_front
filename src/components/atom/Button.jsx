import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <div onClick={onClick ? onClick : () => { }} className='bg-btnBg inline-block px-9 py-5 rounded-full cursor-pointer'>
            <div className='flex gap-4'>
                <div className='font-bold text-lg text-nutraWhite'>{text}</div>
                <img src="https://cdn.shopify.com/s/files/1/0606/0703/7648/files/btnArrow-rr.svg"  className ='hover:scale-125' alt="" />
            </div>
        </div>
    )
}

export default Button