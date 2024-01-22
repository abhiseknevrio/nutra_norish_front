import React from 'react';
import Button from '../atom/Button';

const HowItWorks = () => {

    return (
        <section className='howItWorkSec'>
            <div className='text36 md:text-55px font-bold text-healthTextDark text-center pt-12'>How It Works</div>
            <div className='hidden md:block'>
                <div className='grid md:grid-cols-3 py-16'>
                    <div className='flex justify-center items-center'>
                    </div>
                    <div className='flex justify-center items-center relative'>
                        <img src="/images/longline.svg" alt="" srcset="" className='absolute lineCss' />
                        <div className='step1 flex justify-center items-center text-30px text-nutraWhite font-bold'>STEP 1</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='text-28px font-bold'>Take The Health & Wellness Assessment</div>
                        <div className='text-18px font-medium'>Tell Us About Your Health Goals, Conditions, Diet And Lifestyle</div>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 py-16'>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='text-28px font-bold'>Get Your FREE Personalised Supplement Recommendation</div>
                        <div className='text-18px font-medium'>Get Your Unique Plan Designed By Our Leading Functional Medicine Experts </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='step2 flex justify-center items-center text-30px text-healthTextDark font-bold'>STEP 2</div>
                    </div>
                    <div className='flex justify-center items-center'>

                    </div>
                </div>
                <div className='grid md:grid-cols-3 py-16'>
                    <div className='flex justify-center items-center'>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='step2 flex justify-center items-center text-30px text-healthTextDark font-bold'>STEP 3</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='text-28px font-bold'>Start Your Journey Towards Optimal Health</div>
                        <div className='text-18px font-medium'> Use Our App To Build Healthy Habits And Maximise Your Results </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className='block md:hidden'>
                <div className='grid grid-cols-2 py-8'>
                    <div className='flex justify-center items-center relative'>
                        <img src="/images/line.svg" alt="" srcset="" className='absolute lineCss' />
                        <div className='step1 flex justify-center items-center text-xl md:text-30px text-nutraWhite font-bold'>STEP 1</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='text20 font-bold'>Take The Health & Wellness Assessment</div>
                        <div className='text-18px font-medium'>Tell Us About Your Health Goals, Conditions, Diet And Lifestyle</div>
                    </div>
                </div>
                <div className='grid grid-cols-2 py-8'>
                    <div className='flex justify-center items-center'>
                        <div className='step2 flex justify-center items-center text-xl md:text-30px text-healthTextDark font-bold'>STEP 2</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='text20 font-bold'>Get Your FREE Personalised Supplement Recommendation</div>
                        <div className='text-18px font-medium'>Get Your Unique Plan Designed By Our Leading Functional Medicine Experts </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 py-8'>
                    <div className='flex justify-center items-center'>
                        <div className='step2 flex justify-center items-center text-xl md:text-30px text-healthTextDark font-bold'>STEP 3</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='text20 font-bold'>Start Your Journey Towards Optimal Health</div>
                        <div className='text-18px font-medium'> Use Our App To Build Healthy Habits And Maximise Your Results </div>
                    </div>
                </div>
            </div>
            <div className='border-b border-borderGreen mt-24'></div>
            <div className='flex justify-center mt-30'>
                <Button text={"Take The Quiz"} />
            </div>
        </section>
    )
}

export default HowItWorks;