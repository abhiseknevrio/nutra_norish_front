import React from 'react'

const QualityCard = ({ image, text }) => {
    return (
        <div className='qualityCard flex justify-center items-center'>
            <div className=''>
                <div className='flex justify-center'>
                    <img src={image} alt='' />
                </div>
                <div className='text-20px font-bold text-center pt-5'>{text}</div>
            </div>
        </div>
    )
}

export default QualityCard