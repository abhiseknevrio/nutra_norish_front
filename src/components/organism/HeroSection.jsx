import React, { useEffect, useState } from 'react';
import ClientGroup from '../molecule/ClientGroup';
import Button from '../atom/Button';
import QuizCard from '../molecule/QuizCard';


const HeroSection = () => {

    const [questions, setQuestions] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://us-central1-nutra-nourish.cloudfunctions.net//getAllQuestions`);
                const data = await response.json();
                setQuestions(data.questions)

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <section className='padb-117'>
                <div className='mx-common'>
                    <div>
                        <div className='font-bold text-xl md:text-2xl mt-7 md:mt-14'>
                            ⭐⭐⭐⭐⭐ “I feel better than ever”
                        </div>
                        <div className='flex justify-center mt-5 md:mt-2'>
                            <div className='text-center'>
                                <div className='font-bold text-xl md:text-2xl'>
                                    <span className='left-border'></span>
                                    {"Personalised Vitamins".toUpperCase()}
                                </div>
                                <div className='title65 mt-10 md:mt-5 xl:w-1160'>
                                    Get the Nutrients You Need for Peak Performance
                                </div>
                                <p className='font-bold text-xl mt-8'>Instant access to expert designed personalised Supplement Plan made just For You</p>
                            </div>
                        </div>
                        {/* <div className='lg:hidden flex justify-center mt-14 mb-24'>
                            <Button text="Take The Quiz" />
                        </div> */}

                        {/* Importent Section */}
                        <div className=''>
                            <div className='flex justify-center mt-14'>
                                {
                                    questions ?
                                        <QuizCard questions={questions} />
                                        :
                                        null
                                }
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
