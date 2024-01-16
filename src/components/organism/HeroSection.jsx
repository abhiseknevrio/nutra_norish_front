import React from 'react';
import QuizCard from '../molecule/QuizCard';
import ClientGroup from '../molecule/ClientGroup';
import DifferenceSection from '../molecule/DifferenceSection';
import MediaSection from '../molecule/MediaSection';
import HealthierHappierSection from '../molecule/HealthierHappierSection';
import NewWorldSection from '../molecule/NewWorldSection';
import HowItWorks from '../molecule/HowItWorks';
import PremiumQuality from '../molecule/PremiumQuality';

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
        <>
            <section className='absolute mb-125px' style={heroBg}>
                <div className='mx-common'>
                    <div className='font-bold text-25px mt-56px'>
                        ⭐⭐⭐⭐⭐ “I feel better than ever”
                    </div>
                    <div className='flex justify-center'>
                        <div className='text-center'>
                            <div className='font-bold text-25px'>
                                {"Personalised Vitamins".toUpperCase()}
                            </div>
                            <div className='font-bold text-65px pt-5 md:w-1160'>
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
                <DifferenceSection />
                <MediaSection />
                <HealthierHappierSection />
                <NewWorldSection />
                <HowItWorks />
                <PremiumQuality />
            </section>
        </>
    )
}

export default HeroSection;