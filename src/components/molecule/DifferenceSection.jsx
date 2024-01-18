import React from 'react'

const DifferenceSection = () => {

    const data = [
        {
            id: "01",
            icon: "/images/diff/frame.svg",
            content: "Enhance Fitness, Achieve Vitality, Improve Performance, Boost"
        },
        {
            id: "02",
            icon: "/images/diff/alarm-star.svg",
            content: "Energy, Improve Anxiety, Live Free Of Aches And Pains, Improve"
        },
        {
            id: "03",
            icon: "/images/diff/star-rating.svg",
            content: "Sleep And Immunity."
        },

    ]

    return (
        <section className='differenceSec relative'>
            <img className='absolute -top-100 right-right0 whatsIcon' src='/images/whatsapp.svg' alt='' />
            <div className=''>
                <div className='flex justify-center'>
                    <h1 className='text-30px md:text-55px font-bold text-center md:w-1032'>
                        Feel the difference, just like 10,000+ of our customers
                    </h1>
                </div>
                <div className='mt-60 grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-x-14 text-center font-semibold text-25px'>
                    {
                        data.map(item => (
                            <div key={item.id} className='w-435px'>
                                <div className='flex justify-center'>
                                    <img src={item.icon} alt='' />
                                </div>
                                <div className='mt-30'>{item.content}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default DifferenceSection;