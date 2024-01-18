import React from 'react'
import Button from '../atom/Button';

const PersonalisedSection = () => {

    const containerBg = {
        backgroundImage: `url(${"/images/personalised/bg.svg"})`,
        // backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '763px',
    };

    return (
        <section className='md:overflow-hidden'>
            <div className='flex justify-center items-center' style={containerBg}>
                <div className='personalisedSec'>
                    <div className='flex flex-col md:flex-row items-center md:gap-20'>
                        <div>
                            <img src='/images/newworld/01.svg' alt='' />
                        </div>
                        <div>
                            <div className='text-55px font-bold'>Personalized Plans,Best Value</div>
                            <div className='text-20px font-semibold mt-30'>We have worked hard to eliminate middlemen and overheads, so you get premium supplements at lowest prices.</div>
                            <div className='text-20px font-semibold mt-30'>Get 10% off your first order + free shipping. You can cancel or change up your subscription any time.</div>
                            <div className='mt-30'>
                                <Button text={"TAKE THE QUIZ"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PersonalisedSection;