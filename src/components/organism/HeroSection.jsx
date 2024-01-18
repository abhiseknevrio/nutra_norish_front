import React from 'react';
import QuizCard from '../molecule/QuizCard';
import ClientGroup from '../molecule/ClientGroup';
import Button from '../atom/Button';


const HeroSection = () => {

    return (
        <>
            <section className='padb-117'>
                <div className='mx-common'>
                    <div>
                        <div className='font-bold text-20px md:text-25px mt-7 md:mt-14'>
                            ⭐⭐⭐⭐⭐ “I feel better than ever”
                        </div>
                        <div className='flex justify-center mt-5 md:mt-2'>
                            <div className='text-center'>
                                <div className='font-bold text-20px md:text-25px'>
                                    <span className='left-border'></span>
                                    {"Personalised Vitamins".toUpperCase()}
                                </div>
                                <div className='font-bold text-28px md:text-65px mt-10 md:mt-5 md:w-1160'>
                                    Get the Nutrients You Need for Peak Performance
                                </div>
                                <p className='font-bold text-20px mt-8'>Instant access to expert designed personalised Supplement Plan made just For You</p>
                            </div>
                        </div>
                        <div className='md:hidden flex justify-center mt-14 mb-24'>
                            <Button text="Take The Quiz" />
                        </div>

                        {/* Importent Section */}
                        <div className='hidden md:block'>
                            <div className='flex justify-center mt-14'>
                                <QuizCard />
                            </div>
                            <div className='mt-24'>
                                <ClientGroup />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HeroSection;