import React, { useState } from 'react';
import ClientGroup from '../molecule/ClientGroup';
import Button from '../atom/Button';
import QuizCard from '../molecule/QuizCard';


const HeroSection = () => {

    const [questions, setQuestions] = useState({
        "questions": [
            {
                "question": "Are you male or female?",
                "options": [
                    {
                        "nextQuestion": "q2",
                        "recommendation": null,
                        "value": "Male",
                        "key": "option1"
                    },
                    {
                        "nextQuestion": "q1.1",
                        "recommendation": null,
                        "value": "Female",
                        "key": "option2"
                    }
                ],
                "type": "single_select",
                "key": "q1",
                "required": true
            },
            {
                "question": "How is your menstrual cycle?",
                "options": [
                    {
                        "nextQuestion": "q2",
                        "recommendation": [
                            "recommendation1"
                        ],
                        "value": "Currently menstruating",
                        "key": "option1"
                    },
                    {
                        "nextQuestion": "q2",
                        "recommendation": [
                            "recommendation2"
                        ],
                        "value": "Post Menopause/ Hysterectomy",
                        "key": "option2"
                    },
                    {
                        "nextQuestion": "q2",
                        "recommendation": [
                            "recommendation2"
                        ],
                        "value": "Not currently menstruating due to birth control etc",
                        "key": "option3"
                    },
                    {
                        "nextQuestion": "q2",
                        "recommendation": [
                            "recommendation3"
                        ],
                        "value": "I am pregnant",
                        "key": "option4"
                    },
                    {
                        "nextQuestion": "q2",
                        "recommendation": [
                            "recommendation3"
                        ],
                        "value": "I am breastfeeding",
                        "key": "option5"
                    },
                    {
                        "nextQuestion": "q2",
                        "recommendation": [
                            "recommendation3"
                        ],
                        "value": "I am trying for a baby",
                        "key": "option6"
                    }
                ],
                "type": "single_select",
                "key": "q1.1",
                "required": false
            },
            {
                "question": "How old are you?",
                "options": [
                    {
                        "nextQuestion": "q3",
                        "recommendation": null,
                        "value": "Age",
                        "key": "age"
                    }
                ],
                "type": "input",
                "key": "q2",
                "required": true
            },
            {
                "question": "Is there anything you're particularly concerned about or want to improve?",
                "options": [
                    {
                        "nextQuestion": "q4",
                        "recommendation": [
                            "recommendation4",
                            "recommendation5"
                        ],
                        "value": "Improve My General Health & Wellness",
                        "key": "option1"
                    },
                    {
                        "nextQuestion": "q3.1",
                        "recommendation": null,
                        "value": "Support My Immune system",
                        "key": "option2"
                    },
                    {
                        "nextQuestion": "q4",
                        "recommendation": [
                            "recommendation7"
                        ],
                        "value": "Reduce Body Fat",
                        "key": "option3"
                    },
                    {
                        "nextQuestion": "q4",
                        "recommendation": [
                            "recommendation8"
                        ],
                        "value": "Bone health",
                        "key": "option4"
                    },
                    {
                        "nextQuestion": "q3.2",
                        "recommendation": null,
                        "value": "Stress relief",
                        "key": "option5"
                    },
                    {
                        "nextQuestion": "q3.3",
                        "recommendation": null,
                        "value": "Maintain Healthy Skin, Hair and Nails",
                        "key": "option6"
                    }
                ],
                "type": "multi_select",
                "key": "q3",
                "required": true
            },
            {
                "question": "How often do you get colds/ other infections?A 1. Rarely 2. 2-3 times a year 3. More than 4 times a year",
                "options": [
                    {
                        "nextQuestion": "q4",
                        "recommendation": null,
                        "value": "Rarely",
                        "key": "option1"
                    },
                    {
                        "nextQuestion": "q4",
                        "recommendation": [
                            "recommendation6"
                        ],
                        "value": "2-3 times a year",
                        "key": "option2"
                    },
                    {
                        "nextQuestion": "q4",
                        "recommendation": [
                            "recommendation6"
                        ],
                        "value": "More than 4 times a year",
                        "key": "option3"
                    }
                ],
                "type": "single_select",
                "key": "q3.1",
                "required": true
            },
            {
                "question": "In general, how much stress do you have in life?",
                "options": [
                    {
                        "nextQuestion": "q4",
                        "recommendation": null,
                        "value": "None",
                        "key": "option1"
                    },
                    {
                        "nextQuestion": "q4",
                        "recommendation": [
                            "recommendation9",
                            "recommendation10"
                        ],
                        "value": "Mild / sometimes",
                        "key": "option2"
                    },
                    {
                        "nextQuestion": "q4",
                        "recommendation": [
                            "recommendation9",
                            "recommendation10"
                        ],
                        "value": "Moderate/ Often",
                        "key": "option3"
                    },
                    {
                        "nextQuestion": "q4",
                        "recommendation": [
                            "recommendation9",
                            "recommendation10"
                        ],
                        "value": "Severe/ Constant",
                        "key": "option4"
                    }
                ],
                "type": "single_select",
                "key": "q3.2",
                "required": true
            },
            {
                "question": "",
                "options": [
                    {
                        "nextQuestion": "q4",
                        "recommendation": [
                            "recommendation11"
                        ],
                        "value": "skin",
                        "key": "option1"
                    },
                    {
                        "nextQuestion": "q4",
                        "recommendation": [
                            "recommendation12"
                        ],
                        "value": "Hair",
                        "key": "option2"
                    },
                    {
                        "nextQuestion": "q4",
                        "recommendation": [
                            "recommendation12"
                        ],
                        "value": "Nails",
                        "key": "option3"
                    }
                ],
                "type": "multi_select",
                "key": "q3.3",
                "required": true
            }
        ]
    })

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(process.env.REACT_APP_BASE_URL, {
    //                 method: "GET",
    //                 mode: "cors",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //             });
    //             const data = await response.json();
    //             setQuestions(data)
    //             console.log("data : ", data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);

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
                        <div className='lg:hidden flex justify-center mt-14 mb-24'>
                            <Button text="Take The Quiz" />
                        </div>

                        {/* Importent Section */}
                        <div className='hidden lg:block'>
                            <div className='flex justify-center mt-14'>
                                <QuizCard questions={questions.questions} />
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