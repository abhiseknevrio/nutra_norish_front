import React, { useState } from 'react';

const QuizCard = ({ questions }) => {
    const [userData, setUserData] = useState([]);
    const [question, setNextQue] = useState(questions[0]);
    const [userInput, setUserInput] = useState(null);
    const [checkedItems, setCheckedItems] = useState([]);
    const [singleSelect, setSingleSelect] = useState([]);
    const [nextRecQue, setNextRecQue] = useState(null)

    const handleCheckboxChange = (key) => {
        setCheckedItems((prevCheckedItems) => {
            if (!prevCheckedItems.includes(key)) {
                return [...prevCheckedItems, key];
            } else {
                return prevCheckedItems.filter(item => item !== key);
            }
        });
    };

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

        nextQue(next);
    };

    const nextQue = (val) => {
        const que = questions?.find((item) => item.key === val)

        try {
            if (que !== undefined) {
                setNextQue(que)
            } else {
                // alert("Submit Form")
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
                                        onClick={() => addUserData(question.key, item.key, item.nextQuestion)}
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
                                        onChange={() => handleCheckboxChange(item.key)}
                                    />
                                    <label className='px-1.5' htmlFor={item.key}>{item.value}</label>
                                </div>
                            </div>
                        }
                        {question.type === "input" &&
                            <div className='quizInputContainer'>
                                <input
                                    onChange={(e) => setUserInput(e.target.value)}
                                    className='quizInput rounded-full'
                                    type='text'
                                />
                                <img
                                    onClick={() => addUserData(question.key, userInput, item.nextQuestion)}
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