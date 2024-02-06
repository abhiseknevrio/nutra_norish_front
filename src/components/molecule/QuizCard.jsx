import React, { useState } from 'react';

const QuizCard = ({ questions, queLoading }) => {
    const [question, setNextQue] = useState(questions[0]); // Current Que
    const [userInput, setUserInput] = useState([]);
    const [singleSelectInput, setSingleSelectInput] = useState([]);
    const [multiSelectInput, setMultiSelectInput] = useState([]);
    const [nextRecQue, setNextRecQue] = useState(null)
    const [orderIndex, setOrderIndex] = useState([])
    const [isShowPrev, setIsShowPrev] = useState(false)
    const [isShowNext, setIsShowNext] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [userDetails, setUserDetails] = useState({
        name: null,
        email: null
    })

    const [recNextQue, setRecNextQue] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [responseData, setResponseData] = useState([])
    const [nextOrderIndex, setNextOrderIndex] = useState([])

    console.log("orderIndex : ", orderIndex)
    console.log("nextOrderIndex : ", nextOrderIndex)

    if (queLoading) {
        return <div className="three col">
            <div className="loader" id="loader-1">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    }

    const handleCheckboxChange = (que, key, next) => {
        setIsShowNext(true)
        let nextQue = [...recNextQue]
        if (next) {
            nextQue.push(next)
        }
        const uniqueQue = [...new Set(nextQue)]
        setRecNextQue(uniqueQue.sort())

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

        if (recNextQue.length > 0) {
            setNextRecQue(recNextQue[0])
        } else {
            setNextRecQue(next)
        }
    };


    const handleRadioChange = (que, key, next) => {
        setIsShowNext(true)
        const existingResponseIndex = singleSelectInput.findIndex(response => response.question === que);

        if (existingResponseIndex !== -1) {
            const updatedResponses = [...singleSelectInput];
            updatedResponses[existingResponseIndex] = { question: que, answer: key };
            setSingleSelectInput(updatedResponses)
            setNextRecQue(next);
        } else {
            setSingleSelectInput(prevResponses => [...prevResponses, { question: que, answer: key }]);
        };

        if (recNextQue.length > 0) {
            setNextRecQue(recNextQue[0])
        } else {
            setNextRecQue(next)
        }
    };

    const handleInputChange = (que, key, next) => {
        setIsShowNext(true)
        const existingResponseIndex = userInput.findIndex(response => response.question === que);
        if (existingResponseIndex !== -1) {
            const updatedResponses = [...userInput];
            updatedResponses[existingResponseIndex] = { question: que, answer: key };
            setUserInput(updatedResponses)
        } else {
            setUserInput(prevResponses => [...prevResponses, { question: que, answer: key }]);
        };

        if (recNextQue.length > 0) {
            setNextRecQue(recNextQue[0])
        } else {
            setNextRecQue(next)
        }
    };

    const nextQue = (val) => {
        let que;
        // const que = questions?.find((item) => item.key === val)
        if (nextOrderIndex.length > 0) {
            que = questions?.find((item) => item.key === nextOrderIndex[0])
        } else {
            que = questions?.find((item) => item.key === val)
        }
        nextOrderIndex.shift()
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
            setIsShowPrev(false)
        }
        // setIsShowNext(false)
        setIsShowPrev(true)
        recNextQue.shift()

        if (nextOrderIndex.length === 0) {
            setIsShowNext(false);
        }
    };

    const prevQue = () => {
        setIsShowNext(true)
        const nextOrder = [...nextOrderIndex]
        nextOrder.push(orderIndex[orderIndex.length - 1])
        setNextOrderIndex(nextOrder.sort())
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
        setIsLoading(true)
        if (userDetails.name !== null || userDetails.email !== null) {
            const finalArr = [...singleSelectInput, ...userInput, ...multiSelectInput]
            try {
                const response = await fetch(`https://us-central1-nutra-nourish.cloudfunctions.net/saveUserDataFunction`, {
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
                    setIsLoading(false)
                    const data = await response.json()
                    setResponseData(data)
                }
            } catch (error) {
                console.error("post error : ", error);
                setIsLoading(false)
            }
        } else {
            alert("Please fill all fields")
            setIsLoading(false)
        }
    };

    return (
        <>
            {
                responseData.length <= 0 ? <>
                    {
                        !isSubmit ?
                            <div className='text-center p-5 lg:p-20 quizBox'>
                                <div className='title50'>{question?.question}</div>
                                <div className='mt-9'>
                                    {question.type === "single_select" &&
                                        <div className={`${question.options.length <= 2 ? "flex justify-center gap-x-10" : "grid md:grid-cols-2 gap-5"}`}>
                                            {question?.options?.map((item) => (
                                                <div key={item.key} >
                                                    <div
                                                        onClick={() => handleRadioChange(question.key, item.key, item.nextQuestion)}
                                                        className={`${question.options.length > 2 ? "multiSelectCard rounded-md" : "rounded-full inline-block border border-borderGreen"} hover:bg-hover hover:text-nutraWhite cursor-pointer text-lg  py-2.5 px-10 ${singleSelectInput.find(obj => obj.question === question.key && obj.answer === item.key) ? 'bg-btnBg text-nutraWhite' : 'bg-cardBg'}`}>
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
                                                        className='quizInput rounded-full title40'
                                                        type='text'
                                                    />
                                                    {/* <img
                                                onClick={() => nextQue(nextRecQue)}
                                                className='absolute cursor-pointer'
                                                style={{ right: "40px" }}
                                                src='/images/rightArrow-rr.svg'
                                                alt=''
                                            /> */}
                                                </div>
                                            ))}
                                        </>
                                    }

                                    {
                                        question.type === "multi_select" &&
                                        <div className='grid grid-cols-2 lg:grid-cols-3 cursor-pointer gap-5' >
                                            {
                                                question?.options?.map(item =>
                                                    <div className={`multiSelectCard hover:bg-hover hover:text-nutraWhite flex justify-center items-center rounded-md ${multiSelectInput.find(obj => obj.question === question.key && obj.answer.includes(item.key)) ? 'bg-btnBg text-nutraWhite' : 'bg-cardBg'}`} key={item.key} onClick={() => handleCheckboxChange(question.key, item.key, item.nextQuestion)}>{item.value}</div>)
                                            }
                                        </div>
                                    }
                                </div>
                                <div div className={`flex ${isShowPrev ? 'justify-between' : 'justify-end'} text-lg font-bold mt-20`} >
                                    {isShowPrev && <button className='py-2 px-7 bg-cardBg hover:bg-hover hover:text-nutraWhite rounded-md' onClick={() => prevQue()}>Previous</button>}
                                    {isShowNext && <button className='py-2 px-7 bg-cardBg hover:bg-hover hover:text-nutraWhite rounded-md' onClick={() => nextQue(nextRecQue)}>Next</button>}
                                </div>

                            </div>
                            :
                            (
                                <div className='min-w-full'>
                                    <div className='md:w-690 justify-center mx-auto'>
                                        <div className=''>
                                            <input onChange={e => setUserDetails({ ...userDetails, name: e.target.value })} className='formInput text-xl pl-5 py-5 mt-3' type="text" placeholder="Enter Name" />
                                            <input onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} className='formInput text-xl pl-5 py-5 mt-3' type="email" placeholder="Enter Email" />
                                        </div>
                                        {/* Bottom Border */}
                                        <div className='border-b border-borderGreen mt-10'></div>
                                        <div className='flex justify-center mt-4'>
                                            <button disabled={isLoading} onClick={submitUserData} className={`bg-btnBg inline-block px-9 py-5 rounded-full ${isLoading && 'cursor-not-allowed'}`}>
                                                <div className='flex gap-4'>
                                                    <div className='font-bold text-lg text-nutraWhite'>{isLoading ? 'Submitting...' : 'Submit Form'}</div>
                                                    <img src="https://cdn.shopify.com/s/files/1/0606/0703/7648/files/btnArrow-rr.svg" alt="" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </>

                    :

                    (<div className=' md:w-874'>
                        <h1 className='text-5xl font-bold mb-5'>Response Based on your Answer</h1>
                        <p className='text-lg font-bold text-warning text-center mb-5'>{responseData?.message?.[0]?.disclaimer}</p>
                        <div className='md:h-96 md:overflow-y-scroll'>
                            {
                                responseData?.recommendations?.map(item => (
                                    <div key={item?.key} className='my-5 border p-2.5'>
                                        <div className='text-xl'>Quetion: {item?.question}</div>
                                        <div>Answer : {item?.option}</div>
                                        <div>Rec : {item?.descriotion}</div>
                                        <div>Product : {item?.product_name}</div>
                                        <div>Price : {item?.price}</div>
                                        <div>Properties : {item?.properties?.Dairy_free && "Dairy Free, "} {item?.properties?.Gluten_free && "Gluten Free, "} {item?.properties?.non_vegetarian && "Non Vegetarian, "} {item?.properties?.vegan && "Vegan"}</div>
                                        <div className='hover:text-btnBg'>
                                            <a href={item?.link} target='_blank' rel='noreferrer'>Click here for Product Info</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>)
            }
        </>
    );
};

export default QuizCard;
