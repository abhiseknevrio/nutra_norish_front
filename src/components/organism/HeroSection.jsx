import React, { useEffect, useState } from 'react';
import ClientGroup from '../molecule/ClientGroup';
import Button from '../atom/Button';
import QuizCard from '../molecule/QuizCard';


const HeroSection = () => {

    const [questions, setQuestions] = useState(null)

    // const [questions1, setQuestions1] = useState({
    //     "questions": [
    //         {
    //             "question": "Are you male or female?",
    //             "options": [
    //                 {
    //                     "nextQuestion": "q2",
    //                     "recommendation": null,
    //                     "value": "Male",
    //                     "key": "option1"
    //                 },
    //                 {
    //                     "nextQuestion": "q1.1",
    //                     "recommendation": null,
    //                     "value": "Female",
    //                     "key": "option2"
    //                 }
    //             ],
    //             "type": "single_select",
    //             "key": "q1",
    //             "required": true
    //         },
    //         {
    //             "question": "How is your menstrual cycle?",
    //             "options": [
    //                 {
    //                     "nextQuestion": "q2",
    //                     "recommendation": [
    //                         "recommendation1"
    //                     ],
    //                     "value": "Currently menstruating",
    //                     "key": "option1"
    //                 },
    //                 {
    //                     "nextQuestion": "q2",
    //                     "recommendation": [
    //                         "recommendation2"
    //                     ],
    //                     "value": "Post Menopause/ Hysterectomy",
    //                     "key": "option2"
    //                 },
    //                 {
    //                     "nextQuestion": "q2",
    //                     "recommendation": [
    //                         "recommendation2"
    //                     ],
    //                     "value": "Not currently menstruating due to birth control etc",
    //                     "key": "option3"
    //                 },
    //                 {
    //                     "nextQuestion": "q2",
    //                     "recommendation": [
    //                         "recommendation3"
    //                     ],
    //                     "value": "I am pregnant",
    //                     "key": "option4"
    //                 },
    //                 {
    //                     "nextQuestion": "q2",
    //                     "recommendation": [
    //                         "recommendation3"
    //                     ],
    //                     "value": "I am breastfeeding",
    //                     "key": "option5"
    //                 },
    //                 {
    //                     "nextQuestion": "q2",
    //                     "recommendation": [
    //                         "recommendation3"
    //                     ],
    //                     "value": "I am trying for a baby",
    //                     "key": "option6"
    //                 }
    //             ],
    //             "type": "single_select",
    //             "key": "q1.1",
    //             "required": false
    //         },
    //         {
    //             "question": "How old are you?",
    //             "options": [
    //                 {
    //                     "nextQuestion": "q3",
    //                     "recommendation": null,
    //                     "value": "Age",
    //                     "key": "age"
    //                 }
    //             ],
    //             "type": "input",
    //             "key": "q2",
    //             "required": true
    //         },
    //         {
    //             "question": "Is there anything you're particularly concerned about or want to improve?",
    //             "options": [
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation4",
    //                         "recommendation5"
    //                     ],
    //                     "value": "Improve My General Health & Wellness",
    //                     "key": "option1"
    //                 },
    //                 {
    //                     "nextQuestion": "q3.1",
    //                     "recommendation": null,
    //                     "value": "Support My Immune system",
    //                     "key": "option2"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation7"
    //                     ],
    //                     "value": "Reduce Body Fat",
    //                     "key": "option3"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation8"
    //                     ],
    //                     "value": "Bone health",
    //                     "key": "option4"
    //                 },
    //                 {
    //                     "nextQuestion": "q3.2",
    //                     "recommendation": null,
    //                     "value": "Stress relief",
    //                     "key": "option5"
    //                 },
    //                 {
    //                     "nextQuestion": "q3.3",
    //                     "recommendation": null,
    //                     "value": "Maintain Healthy Skin, Hair and Nails",
    //                     "key": "option6"
    //                 },
    //                 {
    //                     "nextQuestion": "q3.4",
    //                     "recommendation": null,
    //                     "value": "Increase my Energy ",
    //                     "key": "option7"
    //                 },
    //                 {
    //                     "nextQuestion": "q3.5",
    //                     "recommendation": null,
    //                     "value": "Gut health issues",
    //                     "key": "option8"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation19",
    //                         "recommendation20"
    //                     ],
    //                     "value": "Get Restful Sleep",
    //                     "key": "option9"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation21",
    //                         "recommendation22"
    //                     ],
    //                     "value": "Improve Fitness performance (improve my workout)",
    //                     "key": "option10"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation23",
    //                         "recommendation24",
    //                         "recommendation25",
    //                         "recommendation26"
    //                     ],
    //                     "value": "Gain Lean Muscles mass",
    //                     "key": "option11"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation27"
    //                     ],
    //                     "value": "Joint health",
    //                     "key": "option12"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation28",
    //                         "recommendation29"
    //                     ],
    //                     "value": "Heart health",
    //                     "key": "option13"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation31",
    //                         "recommendation30"
    //                     ],
    //                     "value": "Support Brain Health (Focus, Memory, Concentration)",
    //                     "key": "option14"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation32",
    //                         "recommendation10"
    //                     ],
    //                     "value": "Anxiety",
    //                     "key": "option15"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation34"
    //                     ],
    //                     "value": "Eye Health",
    //                     "key": "option16"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation35"
    //                     ],
    //                     "value": "Blood Sugar Control",
    //                     "key": "option17"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation10",
    //                         "recommendation33"
    //                     ],
    //                     "value": "Blood Pressure",
    //                     "key": "option18"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation36"
    //                     ],
    //                     "value": "Cholestrol",
    //                     "key": "option19"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation37"
    //                     ],
    //                     "value": "Liver Health/ Better Detox",
    //                     "key": "option20"
    //                 }
    //             ],
    //             "type": "multi_select",
    //             "key": "q3",
    //             "required": true
    //         },
    //         {
    //             "question": "How often do you get colds/ other infections?",
    //             "options": [
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": null,
    //                     "value": "Rarely",
    //                     "key": "option1"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation6"
    //                     ],
    //                     "value": "2-3 times a year",
    //                     "key": "option2"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation6"
    //                     ],
    //                     "value": "More than 4 times a year",
    //                     "key": "option3"
    //                 }
    //             ],
    //             "type": "single_select",
    //             "key": "q3.1",
    //             "required": true
    //         },
    //         {
    //             "question": "In general, how much stress do you have in life?",
    //             "options": [
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": null,
    //                     "value": "None",
    //                     "key": "option1"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation9",
    //                         "recommendation10"
    //                     ],
    //                     "value": "Mild / sometimes",
    //                     "key": "option2"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation9",
    //                         "recommendation10"
    //                     ],
    //                     "value": "Moderate/ Often",
    //                     "key": "option3"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation9",
    //                         "recommendation10"
    //                     ],
    //                     "value": "Severe/ Constant",
    //                     "key": "option4"
    //                 }
    //             ],
    //             "type": "single_select",
    //             "key": "q3.2",
    //             "required": true
    //         },
    //         {
    //             "question": "Maintain Healthy Skin, Hair and Nails",
    //             "options": [
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation11"
    //                     ],
    //                     "value": "skin",
    //                     "key": "option1"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation12"
    //                     ],
    //                     "value": "Hair",
    //                     "key": "option2"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation12"
    //                     ],
    //                     "value": "Nails",
    //                     "key": "option3"
    //                 }
    //             ],
    //             "type": "multi_select",
    //             "key": "q3.3",
    //             "required": true
    //         },
    //         {
    //             "question": "In general, how are your energy levels?",
    //             "options": [
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation14",
    //                         "recommendation13"
    //                     ],
    //                     "value": "Very Low",
    //                     "key": "option1"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation14",
    //                         "recommendation13"
    //                     ],
    //                     "value": "Low",
    //                     "key": "option2"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation14",
    //                         "recommendation13"
    //                     ],
    //                     "value": "Moderate",
    //                     "key": "option3"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": null,
    //                     "value": "High",
    //                     "key": "option3"
    //                 }
    //             ],
    //             "type": "single_select",
    //             "key": "q3.4",
    //             "required": true
    //         },
    //         {
    //             "question": "Gut health issues",
    //             "options": [
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation15"
    //                     ],
    //                     "value": "I have had antibiotics in the past year or did frequently in the past? ",
    //                     "key": "option1"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation16"
    //                     ],
    //                     "value": "I often have gas and bloating",
    //                     "key": "option2"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation15",
    //                         "recommendation16"
    //                     ],
    //                     "value": "I often have indigestion",
    //                     "key": "option3"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation17"
    //                     ],
    //                     "value": "I frequenty have diarrhea or soft stools - Diarrhoea",
    //                     "key": "option4"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": [
    //                         "recommendation15",
    //                         "recommendation18"
    //                     ],
    //                     "value": "I often deal with constipation",
    //                     "key": "option5"
    //                 },
    //                 {
    //                     "nextQuestion": "q4",
    //                     "recommendation": null,
    //                     "value": "None of the above",
    //                     "key": "option3"
    //                 }
    //             ],
    //             "type": "multi_select",
    //             "key": "q3.5",
    //             "required": true
    //         }
    //     ]
    // })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_BASE_URL);
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
                        <div className='lg:hidden flex justify-center mt-14 mb-24'>
                            <Button text="Take The Quiz" />
                        </div>

                        {/* Importent Section */}
                        <div className='hidden lg:block'>
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