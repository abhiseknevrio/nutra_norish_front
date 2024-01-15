import React from 'react';
import QuizCard from '../molecule/QuizCard';
import ClientGroup from '../molecule/ClientGroup';

const HeroSection = () => {

    const heroBg = {
        // backgroundImage: `url(${"/images/homeHeroSection.svg"})`,
        backgroundImage: `url(${"/images/heroBgVector.svg"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '615px'
    };

    return (
        <section className='absolute' style={heroBg}>
            <div className='mx-common'>
                <div className='font-bold text-25px pt-14'>
                    ⭐⭐⭐⭐⭐ “I feel better than ever”
                </div>
                <div className='flex justify-center'>
                    <div className='text-center'>
                        <div className='font-bold text-25px'>
                            {"Personalised Vitamins".toUpperCase()}
                        </div>
                        <div className='font-bold text-65px pt-5 w-1160'>
                            Get the Nutrients You Need for Peak Performance
                        </div>
                        <p className='font-bold text-xl pt-8'>Instant access to expert designed personalised Supplement Plan made just For You</p>
                    </div>
                </div>
                {/* Importent Section */}
                <div className='flex justify-center mt-56px'>
                    <QuizCard />
                </div>
                <div className='mt-100px'>
                    <ClientGroup />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;