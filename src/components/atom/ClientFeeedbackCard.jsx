import React from 'react'

const ClientFeeedbackCard = ({ item }) => {

    return (
        <div className='clientFeeedbackCard' style={{ background: item.bgColor }}>
            <div className='text-20px font-bold'>{item.title}</div>
            <div className='text-18px mt-30'>{item.content}</div>
            <div className='mt-30 flex justify-center'>
                <img src='' alt='' />
                <div>
                    <div>{item.client.name}</div>
                    <div>Read</div>
                </div>
            </div>
        </div>
    )
}

export default ClientFeeedbackCard;