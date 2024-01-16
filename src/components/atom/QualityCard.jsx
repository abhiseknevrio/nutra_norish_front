import React from 'react'

const QualityCard = ({ image, text }) => {
    return (
        <div className='w-261 h-259 bg-nutraWhite flex justify-center items-center hover:bg-btnBg hover:text-nutraWhite'>
            <div>
                <div className='flex justify-center'>
                    <img src={image} alt='' />
                </div>
                <div className='text-20px font-bold text-center pt-5'>{text}</div>
            </div>
        </div>
    )
}

export default QualityCard