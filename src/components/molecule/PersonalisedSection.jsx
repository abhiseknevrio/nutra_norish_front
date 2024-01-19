import React from 'react'
import Button from '../atom/Button';

const PersonalisedSection = () => {

    return (
        <section>
            <div className='personalisedBg'>
                <div className='personalisedSec'>
                    <div className='flex flex-col lg:flex-row items-center'>
                        <div className='personalised-left'>
                            <img className='p-5' src='/images/personalised/personalised.svg' alt='' />
                        </div>
                        <div className='personalised-right text-center lg:text-left'>
                            <div className='text-30px lg:text-55px font-bold'>Personalized Plans,Best Value</div>
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