import React from 'react';
import Button from '../atom/Button';

const HowItWorks = () => {

    const containerBg = {
        backgroundImage: `url(${"/images/howItWorkBg.svg"})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '814px',
    };

    return (
        <section className='howItWorkSec'>
            <div className='min-w-full'>
                <div style={containerBg}>
                    <div className='text-55px font-bold text-healthTextDark text-center pt-12'>How It Works</div>

                    {/*  STEP  */}
                    <div className='flex justify-center'>
                        <div className='flex justify-center items-center'>
                            <div className='w-536px'>
                                <div className='text-28px font-bold'>Get Your FREE Personalised Supplement Recommendation</div>
                                <div className='text-18px font-medium'>Get Your Unique Plan Designed By Our Leading Functional Medicine Experts </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-row items-center'>
                                <div className='step1 flex justify-center items-center text-30px text-nutraWhite font-bold'>STEP 1</div>
                            </div>
                            <div className='flex flex-row items-center'>
                                <div className='step2 flex justify-center items-center text-30px text-healthTextDark font-bold'>STEP 2</div>
                            </div>
                            <div className='flex flex-row items-center'>
                                <div className='step2 flex justify-center items-center text-30px text-healthTextDark font-bold'>STEP 3</div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <div className='w-536px'>
                                    <div className='text-28px font-bold'>Take The Health & Wellness Assessment</div>
                                    <div className='text-18px font-medium'>Tell Us About Your Health Goals, Conditions, Diet And Lifestyle</div>
                                </div>
                            </div>
                            <div className='w-536px'>
                                <div className='text-28px font-bold'>Start Your Journey Towards Optimal Health</div>
                                <div className='text-18px font-medium'> Use Our App To Build Healthy Habits And Maximise Your Results </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className='border-b border-borderGreen mt-95px'></div>

                <div className='flex justify-center mt-30'>
                    <Button text={"Take The Quiz"} />
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;