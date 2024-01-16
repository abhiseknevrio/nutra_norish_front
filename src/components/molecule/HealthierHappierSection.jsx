import React from 'react'

const HealthierHappierSection = () => {

    const statistics = [
        { percentage: '98%', text: 'Feel Improvement In Their Health' },
        { percentage: '99%', text: 'Appreciate The Highest Quality Ingredients' },
        { percentage: '95%', text: 'Use Our App To Build Healthier Habits' },
    ];

    return (
        <section className='bg-healthSection px-auto pb-24'>
            <div className='flex justify-center'>
                <div className='mt-106px font-bold text-58px'>A Healthier, Happier You</div>
            </div>
            <div className='mx-222px'>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-90px'>
                    {statistics.map((stat, index) => (
                        <div key={index} className='text-center w-435'>
                            <div className='text-25px font-bold'>{stat.percentage} OF CUSTOMERS</div>
                            <p className='text-25px font-semibold text-healthText pt-3'>{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HealthierHappierSection;