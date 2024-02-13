import React from 'react'
import Button from '../atom/Button';

const PersonalisedSection = () => {

    return (
        <section>
            <div className='personalisedBg'>
                <div className='personalisedSec'>
                    <div className='flex flex-col lg:flex-row items-center'>
                        <div className='personalised-left'>
                            <img className='p-5' src='https://cdn.shopify.com/s/files/1/0606/0703/7648/files/personalised-rr.svg' alt='' />
                        </div>
                        <div className='personalised-right text-center lg:text-left'>
                            <div className='title55'>Personalized Plans,Best Value</div>
                            <div className='text-xl font-semibold mt-30'>
                                We have worked hard to eliminate middlemen and overheads, so you get premium supplements at lowest prices. <br /> <br />
                                Get 10% off your first order + free shipping. You can cancel or change up your subscription any time.
                            </div>
                            <div className='mt-30'>
                                <a href='#quizsection'>
                                    <Button text="TAKE THE QUIZ" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default PersonalisedSection;