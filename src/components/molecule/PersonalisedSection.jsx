import React from 'react'
import Button from '../atom/Button';

const PersonalisedSection = () => {

    const containerBg = {
        backgroundImage: `url(${"/images/personalised/bg.svg"})`,
        // backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '763px',
    };

    return (
        <section>

            {/* for desktop */}
            <div className='hidden md:block'>
                <div className='flex justify-center items-center' style={containerBg}>
                    <div className='personalisedSec'>
                        <div className='flex items-center gap-20'>
                            <div>
                                <img className='p-5' src='/images/newworld/01.svg' alt='' />
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
            </div>

            {/* for mobile */}
            <div className='md:hidden'>
                <div className='flex justify-center items-center'>
                    <div className='personalisedSec'>
                        <img className='md:p-5' src='/images/newworld/01.svg' alt='' />
                        <div className='mt-10'>
                            <div className='text-30px text-center font-bold'>Personalized Plans,Best Value</div>
                            <div className='text-20px text-center font-semibold mt-30'>We have worked hard to eliminate middlemen and overheads, so you get premium supplements at lowest prices.</div>
                            <div className='text-20px text-center font-semibold mt-30'>Get 10% off your first order + free shipping. You can cancel or change up your subscription any time.</div>
                            <div className='mt-30 flex justify-center'>
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