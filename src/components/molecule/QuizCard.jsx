import React, { useState } from 'react';

const QuizCard = ({ questions }) => {
    const [question, setNextQue] = useState(questions[0]); // Current Que
    const [userInput, setUserInput] = useState([]);
    const [singleSelectInput, setSingleSelectInput] = useState([]);
    const [multiSelectInput, setMultiSelectInput] = useState([]);
    const [nextRecQue, setNextRecQue] = useState(null)
    const [orderIndex, setOrderIndex] = useState([])
    const [isShowPrev, setIsShowPrev] = useState(false)
    const [isShowNext, setIsShowNext] = useState(true)
    const [isSubmit, setIsSubmit] = useState(false)
    const [userDetails, setUserDetails] = useState({
        name: null,
        email: null
    })

    // const [responseData, setResponseData] = useState([
    //     {
    //         "question": "How is your menstrual cycle?",
    //         "questionKey": "q1.1",
    //         "option": "Post Menopause/ Hysterectomy",
    //         "optionKey": "option2",
    //         "condition": {
    //             "gender": "Female"
    //         },
    //         "price": 29.99,
    //         "link": "https://nutranourish.shop/products/complete-multi%E2%84%A2?_pos=3&_sid=b69aed83a&_ss=r",
    //         "descriotion": "Female not having menses: Complete Multi without Copper & Iron (Take 4 capsules per day (2 with each meal)) and OmegaAvail synergy (1 after any meal)",
    //         "priority": 1,
    //         "product_name": "DFH Multi (feee of copper and iron)",
    //         "key": "recommendation2",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Blood Pressure",
    //         "optionKey": "option18",
    //         "price": 83,
    //         "link": "https://nutranourish.shop/products/htn-supreme%E2%84%A2?_pos=1&_sid=e3a901793&_ss=r",
    //         "description": " Take 4 capsules per day (Divided dosing recommended)",
    //         "priority": 1,
    //         "product_name": " HTN supreme",
    //         "key": "recommendation33",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Do you frequently suffer from Seasonal Allergies?",
    //         "questionKey": "q6",
    //         "option": "Yes",
    //         "optionKey": "option1",
    //         "price": 85,
    //         "link": "https://nutranourish.shop/products/histaeze%E2%84%A2?_pos=1&_sid=74d73797a&_ss=r",
    //         "description": "Take 4 capsules per day (Divided dosing recommended)",
    //         "priority": 1,
    //         "product_name": "Histease",
    //         "key": "recommendation40",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     }
    // ])

    const [responseData, setResponseData] = useState([])

    console.log(responseData)

    const handleCheckboxChange = (que, key, next) => {
        const updatedSelectedOptions = [...multiSelectInput];
        const questionIndex = updatedSelectedOptions.findIndex(option => option.question === que);
        if (questionIndex === -1) {
            updatedSelectedOptions.push({ question: que, answer: [] });
        }

        const updatedQuestionIndex = updatedSelectedOptions.findIndex(option => option.question === que);

        const isOptionSelected = updatedSelectedOptions[updatedQuestionIndex].answer.includes(key);

        if (isOptionSelected) {

            updatedSelectedOptions[updatedQuestionIndex].answer = updatedSelectedOptions[updatedQuestionIndex].answer.filter(item => item !== key);
        } else {

            updatedSelectedOptions[updatedQuestionIndex].answer.push(key);
        }
        setMultiSelectInput(updatedSelectedOptions);
        setNextRecQue(next)
    };

    const handleRadioChange = (que, key, next) => {
        const existingResponseIndex = singleSelectInput.findIndex(response => response.question === que);

        if (existingResponseIndex !== -1) {
            const updatedResponses = [...singleSelectInput];
            updatedResponses[existingResponseIndex] = { question: que, answer: key };
            setSingleSelectInput(updatedResponses)
            setNextRecQue(next);
        } else {
            setSingleSelectInput(prevResponses => [...prevResponses, { question: que, answer: key }]);
        };
        setNextRecQue(next);
    };

    const handleInputChange = (que, key, next) => {
        const existingResponseIndex = userInput.findIndex(response => response.question === que);
        if (existingResponseIndex !== -1) {
            const updatedResponses = [...userInput];
            updatedResponses[existingResponseIndex] = { question: que, answer: key };
            setUserInput(updatedResponses)
        } else {
            setUserInput(prevResponses => [...prevResponses, { question: que, answer: key }]);
        };
        setNextRecQue(next);
    };

    const nextQue = (val) => {
        const que = questions?.find((item) => item.key === val)
        const updatedIndex = [...orderIndex];
        const questionIndex = updatedIndex.findIndex(option => option === que)

        if (que !== undefined) {
            setNextQue(que)
            if (questionIndex === -1) {
                updatedIndex.push(que.key);
            }
            setOrderIndex(updatedIndex)
        } else {
            setIsSubmit(true)
            setIsShowNext(false)
            setIsShowPrev(false)
        }
        setIsShowPrev(true)
    };

    const prevQue = () => {
        orderIndex.pop()
        const lastQue = orderIndex.at(orderIndex.length - 1)
        const que = questions?.find((item) => item.key === lastQue)
        if (que !== undefined) {
            setNextQue(que)
        } else {
            setNextQue(questions[0])
            setIsShowPrev(false)
        }
    };

    const submitUserData = async () => {
        if (userDetails.name !== null || userDetails.email !== null) {
            const finalArr = [...singleSelectInput, ...userInput, ...multiSelectInput]
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}saveUserDataFunction`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userDetails: userDetails,
                        response: finalArr
                    }),
                });

                if (response.ok) {
                    const data = await response.json()
                    if (data.message[0]) {
                        alert(data?.message[0]?.disclaimer)
                    }
                    setResponseData(data.recommendations)
                }
            } catch (error) {
                console.error("post error : ", error);
            }
        } else {
            alert("Please fill all fields")
        }
    };

    return (
        <>
            {
                responseData.length <= 0 ? <>
                    {
                        !isSubmit ?
                            <div className='text-center p-20 quizBox'>
                                <div className='title50'>{question?.question}{question?.required && <span>*</span>}</div>
                                <div className='mt-9'>
                                    {question.type === "single_select" &&
                                        <div className='grid grid-cols-3 justify-center gap-x-10'>
                                            {question?.options?.map((item) => (
                                                <div key={item.key} >
                                                    <div
                                                        onClick={() => handleRadioChange(question.key, item.key, item.nextQuestion)}
                                                        className={`hover:bg-btnBg hover:text-nutraWhite cursor-pointer text-lg border border-borderGreen rounded-full py-2.5 px-5 inline-block ${singleSelectInput.find(obj => obj.question === question.key && obj.answer === item.key) ? 'bg-btnBg text-nutraWhite' : ''}`}>
                                                        {item.value}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                    {question.type === "input" &&
                                        <>
                                            {question?.options?.map((item) => (
                                                <div key={item.key}>
                                                    <input
                                                        onChange={(e) => handleInputChange(question.key, e.target.value, item.nextQuestion)}
                                                        className='quizInput rounded-full'
                                                        type='text'
                                                    />
                                                    {/* <img
                                                onClick={() => nextQue(nextRecQue)}
                                                className='absolute cursor-pointer'
                                                style={{ right: "40px" }}
                                                src='/images/rightArrow.svg'
                                                alt=''
                                            /> */}
                                                </div>
                                            ))}
                                        </>
                                    }

                                    {
                                        question.type === "multi_select" &&
                                        <div className='grid grid-cols-3 cursor-pointer gap-5' >
                                            {
                                                question?.options?.map(item =>
                                                    <div className={`multiSelectCard ${multiSelectInput.find(obj => obj.question === question.key && obj.answer.includes(item.key)) ? 'bg-btnBg text-nutraWhite' : 'bg-nutraWhite'}`} key={item.key} onClick={() => handleCheckboxChange(question.key, item.key, item.nextQuestion)}>{item.value}</div>)
                                            }
                                        </div>
                                    }
                                </div>
                                <div div className={`flex ${isShowPrev ? 'justify-between' : 'justify-end'} text-lg font-bold mt-10`} >
                                    {isShowPrev && <button className='hover:text-borderGreen' onClick={() => prevQue()}>Previous</button>}
                                    {isShowNext && <button className='hover:text-borderGreen' onClick={() => nextQue(nextRecQue)}>Next</button>}
                                </div>

                            </div>
                            :
                            (
                                <div>
                                    <div className='w-1320 justify-center mx-auto'>
                                        <div className='grid grid-col-1 md:grid-cols-2 gap-5'>
                                            <input onChange={e => setUserDetails({ ...userDetails, name: e.target.value })} className='formInput pl-5 py-7 mt-3' type="text" placeholder="Enter Name" />
                                            <input onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} className='formInput pl-5 py-7 mt-3' type="email" placeholder="Enter Email" />
                                        </div>
                                        {/* Bottom Border */}
                                        <div className='border-b border-borderGreen mt-10'></div>
                                        <div className='flex justify-center mt-4'>
                                            <button onClick={submitUserData} className='bg-btnBg inline-block px-9 py-5 rounded-full'>
                                                <div className='flex gap-4'>
                                                    <div className='font-bold text-lg text-nutraWhite'>Submit Form</div>
                                                    <img src="/images/btnArrow.svg" alt="" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </>

                    :

                    (
                        <div className='h-96 overflow-y-scroll'>
                            <h1 className='text-5xl font-bold'>Response Based on your Answer</h1>
                            {
                                responseData.map(item => (
                                    <div key={item?.key} className='my-5 border p-2.5'>
                                        <div className='text-xl'>Quetion: {item?.question}</div>
                                        <div>Answer : {item?.option}</div>
                                        <div>Rec : {item?.descriotion}</div>
                                        <div>Product : {item?.product_name}</div>
                                        <div>Price : {item?.price}</div>
                                        <div>Properties : {item?.properties.Dairy_free && "Dairy Free, "} {item?.properties.Gluten_free && "Gluten Free, "} {item?.properties.non_vegetarian && "Non Vegetarian, "} {item?.properties.vegan && "Vegan"}</div>
                                        <div className='hover:text-btnBg'>
                                            <a href={item.link} target='_blank' rel='noreferrer'>Click here for Product Info</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
            }
        </>
    );
};

export default QuizCard;