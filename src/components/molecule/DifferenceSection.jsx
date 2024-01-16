import React from 'react'

const DifferenceSection = () => {
    return (
        <section className='bg-diffrentSection mt-125px relative'>
            <img className='absolute -top-100 right-right0' src='/images/whatsapp.svg' alt='' />
            <div className='flex justify-center'>
                <div className='mt-95px mb-106px'>
                    <div className='flex justify-center'>
                        <h1 className='text-55px font-bold text-center md:w-1032'>
                            Feel the difference, just like 10,000+ of our customers
                        </h1>
                    </div>
                    <div className='mt-60px grid grid-cols-1 md:grid-cols-3 gap-x-14 text-center font-semibold text-25px'>
                        <div className='w-435'>
                            <div className='flex justify-center mb-30px'>
                                <img src='/images/diff/frame.svg' alt='' />
                            </div>
                            <div>Enhance Fitness, Achieve Vitality, Improve Performance, Boost</div>
                        </div>
                        <div className='w-435'>
                            <div className='flex justify-center mb-30px'>
                                <img src='/images/diff/alarm-star.svg' alt='' />
                            </div>
                            <div>Energy, Improve Anxiety, Live Free Of Aches And Pains, Improve</div>
                        </div>
                        <div className='w-435'>
                            <div className='flex justify-center mb-30px'>
                                <img src='/images/diff/star-rating.svg' alt='' />
                            </div>
                            <div>Sleep And Immunity.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DifferenceSection;