import React from 'react'

const HealthierHappierSection = () => {

    const statistics = [
        { percentage: '98%', text: 'Feel Improvement In Their Health' },
        { percentage: '99%', text: 'Appreciate The Highest Quality Ingredients' },
        { percentage: '95%', text: 'Use Our App To Build Healthier Habits' },
    ];

    return (
        <section className='healthSection'>
            <div className='flex justify-center'>
                <div className='mt-106px title58'>A Healthier, Happier You</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:mt-24'>
                {statistics.map((stat, index) => (
                    <div key={index} className='text-center w-435px mt-28 md:mt-0'>
                        <div className='text-xl font-bold'>{stat.percentage} OF CUSTOMERS</div>
                        <p className='text-xl font-semibold text-healthText mt-3'>{stat.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HealthierHappierSection;