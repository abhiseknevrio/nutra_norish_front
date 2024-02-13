import React, { useState } from 'react';
import ClientGroup from '../molecule/ClientGroup';
import QuizCard from '../molecule/QuizCard';
import Button from '../atom/Button';


const HeroSection = () => {

    const [questions, setQuestions] = useState(null)
    const [queLoading, setQueLoading] = useState(false)

    const getAllQuestions = async () => {
        setQueLoading(true)
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/getAllQuestions`);
            const data = await response.json();
            setQuestions(data.questions)
            if (response.ok) {
                setTimeout(() => {
                    setQueLoading(false)
                }, 800)
            }
        } catch (error) {
            setQueLoading(false)
            console.error(error);
        }
    };

    return (
        <>
            <section id="quizsection" className='padb-117'>
                <div>
                    <img className='fixed bottom-0 right-0 whatsIcon' src='https://cdn.shopify.com/s/files/1/0606/0703/7648/files/whatsapp-rr.svg' alt='' />
                </div>
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

                        {/* Importent Section */}
                        <div>
                            <div className='flex justify-center mt-14'>
                                {
                                    questions ?
                                        <QuizCard questions={questions} queLoading={queLoading} />
                                        :
                                        <Button onClick={getAllQuestions} text={queLoading ? "LOADING ..." : "START THE QUIZ"} />
                                }
                            </div>
                        </div>
                        <div className='mt-24'>
                            <ClientGroup />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HeroSection;