import React, { useState } from 'react';

const QuizCard = ({ questions }) => {
    const [userData, setUserData] = useState([]);
    const [question, setNextQue] = useState(questions[0]);
    const [userInput, setUserInput] = useState(null);

    console.log("userData : ", userData);
    console.log("question : ", question);

    const addUserData = (key, val, next) => {
        setUserData((prevUserData) => {
            const existingIndex = prevUserData.findIndex((item) => item.key === key);

            if (existingIndex !== -1) {
                const updatedUserData = [...prevUserData];
                updatedUserData[existingIndex] = { key: key, val: val };
                return updatedUserData;
            } else {
                return [...prevUserData, { key: key, val: val }];
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
                alert("Submit Form")
            }
        } catch (error) {
            console.error("nextQue error", error)
        }
    };

    return (
        <div className='text-center p-20 quizBox'>
            <div className='title50'>{question?.question}{question?.required && <span>*</span>}</div>
            <div className='mt-9'>
                <div className='grid grid-cols-2 gap-x-10'>
                    {question.type ?
                        <>
                            {question?.options?.map((item) => (
                                <div key={item.key}>
                                    {(question.type === "single_select" || question?.type === "multi_select") &&
                                        <div>
                                            <div className='text-lg border border-borderGreen rounded-full py-2.5 px-5 inline-block'>
                                                <input
                                                    onClick={() => addUserData(question.key, item.value, item.nextQuestion)}
                                                    type="radio"
                                                    id={item.key}
                                                    name="question"
                                                    value={item.key}
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
                        </>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    );
};

export default QuizCard;
