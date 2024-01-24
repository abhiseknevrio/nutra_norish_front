import React, { useState } from 'react';

const QuizCard = ({ questions }) => {
    const [userData, setUserData] = useState([]); // POST DATA
    const [question, setNextQue] = useState(questions[0]); // Current Que
    const [userInput, setUserInput] = useState({});
    const [singleSelectInput, setSingleSelectInput] = useState({});
    const [multiSelectInput, setMultiSelectInput] = useState({ question: "", answer: [] });
    const [nextRecQue, setNextRecQue] = useState(null)

    const handleCheckboxChange = (que, key, next) => {
        setMultiSelectInput((prevMultiSelectInput) => {
            if (!prevMultiSelectInput.answer.includes(key)) {
                return { ...prevMultiSelectInput, question: que, answer: [...prevMultiSelectInput.answer, key] };
            } else {
                return { ...prevMultiSelectInput, answer: prevMultiSelectInput.answer.filter(item => item !== key) };
            }
        });
        setNextRecQue(next)
    };

    const handleRadioChange = (que, key, next) => {
        setSingleSelectInput((prevSingleSelectInput) => {
            return { ...prevSingleSelectInput, [que]: key, }
        });
        setNextRecQue(next);
    };

    const handleInputChange = (que, key, next) => {
        setUserInput((prevUserInput) => {
            return { ...prevUserInput, [que]: key, }
        });

        setNextRecQue(next)
    };

    console.log("userInput : ", userInput)

    const addUserData = (key, val, next) => {
        setUserData((prevUserData) => {
            const existingIndex = prevUserData.findIndex((item) => item.key === key);

            if (existingIndex !== -1) {
                const updatedUserData = [...prevUserData];
                updatedUserData[existingIndex] = { question: key, answer: val };
                return updatedUserData;
            } else {
                return [...prevUserData, { question: key, answer: val }];
            }
        });
    };

    const nextQue = (val) => {
        const que = questions?.find((item) => item.key === val)

        try {
            if (que !== undefined) {
                setNextQue(que)
            } else {
                alert("Ques end...! --> Submit Form")
            }
        } catch (error) {
            console.error("nextQue error", error)
        }
    };

    return (
        <div className='text-center p-20 quizBox'>
            <div className='title50'>{question?.question}{question?.required && <span>*</span>}</div>
            <div className='mt-9'>
                {question?.options?.map((item) => (
                    <div key={item.key}>
                        {(question.type === "single_select") &&
                            <div>
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
                        }
                        {(question?.type === "multi_select") &&
                            <div className=''>
                                <div className='text-lg border border-borderGreen rounded-full py-2.5 px-5 inline-block'>
                                    <input
                                        type="checkbox"
                                        id={item.key}
                                        name="question"
                                        value={item.value}
                                        onChange={() => handleCheckboxChange(question.key, item.key, item.nextQuestion)}
                                    />
                                    <label className='px-1.5' htmlFor={item.key}>{item.value}</label>
                                </div>
                            </div>
                        }
                        {question.type === "input" &&
                            <div className='quizInputContainer'>
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
                        }
                    </div>
                ))}
            </div>
            <div className='flex justify-between text-lg font-bold mt-10'>
                <button>Previous</button>
                <button className='hover:text-borderGreen' onClick={() => nextQue(nextRecQue)}>Next</button>
            </div>
        </div>
    );
};

export default QuizCard;