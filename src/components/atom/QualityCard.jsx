import React, { useState } from 'react'

const QualityCard = ({ image, text }) => {

    const [hover, setHover] = useState(false)

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='qualityCard flex justify-center items-center'>
            <div className=''>
                <div className='flex justify-center'>
                    <img className={`${hover && 'invert'}`} src={image} alt='' />
                </div>
                <div className='text-base md:text-xl font-bold text-center pt-5'>{text}</div>
            </div>
        </div>
    )
}

export default QualityCard;