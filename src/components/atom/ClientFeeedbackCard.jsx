import React from 'react'

const ClientFeeedbackCard = ({ item }) => {

    return (
        <div className='clientFeeedbackCard' style={{ background: item.bgColor }}>
            <div className='text-2xl font-bold'>{item.title}</div>
            <div className='text-base md:text-lg mt-30'>{item.content}</div>
            <div className='mt-30 flex justify-center items-center gap-5'>
                <img loading='lazy' style={{ borderRadius: "46% 54% 62% 38% / 45% 32% 68% 55%" }} src={item.client.image} alt='' />
                <div>
                    <div className='text-base'>{item.client.name}</div>
                    <div>{item.client.linkText}</div>
                </div>
            </div>
        </div>
    )
}

export default ClientFeeedbackCard;