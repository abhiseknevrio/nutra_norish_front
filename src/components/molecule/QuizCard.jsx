import React, { useState } from 'react';

const QuizCard = ({ questions }) => {
    const [userData, setUserData] = useState([]); // POST DATA
    const [question, setNextQue] = useState(questions[0]); // Current Que
    const [userInput, setUserInput] = useState([]);
    const [singleSelectInput, setSingleSelectInput] = useState([]);
    const [multiSelectInput, setMultiSelectInput] = useState([]);
    const [nextRecQue, setNextRecQue] = useState(null)

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
            setSingleSelectInput(prevResponses => [...prevResponses, { question: que, ans: key }]);
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
            setUserInput(prevResponses => [...prevResponses, { question: que, ans: key }]);
        };
        setNextRecQue(next);
    };


    const addUserData = async () => {
        const finalArr = [...singleSelectInput, ...userInput, ...multiSelectInput]
        setUserData(finalArr)

        console.log("final Arr", finalArr)

        // setUserData((prevUserData) => {
        //     const existingIndex = prevUserData.findIndex((item) => item.key === key);

        //     if (existingIndex !== -1) {
        //         const updatedUserData = [...prevUserData];
        //         updatedUserData[existingIndex] = { question: key, answer: val };
        //         return updatedUserData;
        //     } else {
        //         return [...prevUserData, { question: key, answer: val }];
        //     }
        // });

        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}saveUserDataFunction`, {
                method: 'POST',
                body: JSON.stringify({
                    "userDetails": {
                        "name": "Abhisek",
                        "email": "abhisek@nevrio.tech"
                    },
                    finalArr
                }),
            });
            console.log("post response : ", response);
        } catch (error) {
            console.error("post error : ", error);
        }

    };

    console.log("userData", userData)

    const nextQue = (val) => {
        const que = questions?.find((item) => item.key === val)

        try {
            if (que !== undefined) {
                setNextQue(que)
            } else {
                alert("Ques end...! --> Submit Form")
                addUserData()
            }
        } catch (error) {
            console.error("nextQue error", error)
        }
    };

    return (
        <div className='text-center p-20 quizBox'>
            <div className='title50'>{question?.question}{question?.required && <span>*</span>}</div>
            <div className='mt-9'>
                {question.type === "single_select" &&
                    <>
                        {question?.options?.map((item) => (
                            <div key={item.key}>
                                <div className='text-lg border border-borderGreen rounded-full py-2.5 px-5 inline-block'>
                                    <input
                                        onClick={() => handleRadioChange(question.key, item.key, item.nextQuestion)}
                                        type="radio"
                                        id={item.key}
                                        name={item.value}
                                        value={item.key}
                                    />
                                    <label className='px-1.5' htmlFor={item.key}>{item.value}</label>
                                </div>
                            </div>
                        ))}
                    </>
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
                                <img
                                    onClick={() => nextQue(nextRecQue)}
                                    className='absolute cursor-pointer'
                                    style={{ right: "40px" }}
                                    src='/images/rightArrow.svg'
                                    alt=''
                                />
                            </div>
                        ))}
                    </>
                }


                {
                    question.type === "multi_select" &&
                    <div className='cursor-pointer' >
                        {
                            question?.options?.map(item =>
                                <div key={item.key} onClick={() => handleCheckboxChange(question.key, item.key, item.nextQuestion)}>{item.value}</div>)
                        }
                    </div>
                }
            </div >
            <div div className='flex justify-between text-lg font-bold mt-10' >
                <button>Previous</button>
                <button className='hover:text-borderGreen' onClick={() => nextQue(nextRecQue)}>Next</button>
            </div>
        </div >
    );
};

export default QuizCard;