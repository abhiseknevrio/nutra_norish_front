import React, { useState } from 'react';

const QuizCard = ({ questions }) => {

    const [userData, setUserData] = useState([]);
    const [question, setNextQue] = useState(questions[0])
    const [userInput, setUserInput] = useState(null)

    console.log("userData : ", userData)
    console.log("question : ", question)

    const addUserData = (key, val, next) => {
        setUserData([...userData, { key: key, val: val }]);
        nextQue(next)
    }

    const nextQue = (val) => {
        setNextQue(questions?.filter(item => item.key === val)[0])
    }

    return (
        <div className='text-center p-20 quizBox'>
            <div className='title50'>{question?.question}{question?.required && <span>*</span>}</div>
            <div className='mt-9'>
                <div className='grid grid-cols-2 gap-x-10'>
                    {(question?.type === "single_select" || question?.type === "multi_select") ?
                        question?.options?.map(item => (
                            <div key={item.key}>
                                <div className='text-lg border border-borderGreen rounded-full py-2.5 px-5 inline-block'>
                                    <input onClick={() => addUserData(item.key, item.value, item.nextQuestion)} type="radio" id={item.key} name="question" value={item.key} />
                                    <label className='px-1.5' htmlFor={item.key}>{item.value}</label>
                                </div>
                            </div>
                        ))
                        :
                        question?.type === "input" ?
                            question?.options?.map(item => (
                                <div key={item.key} className='quizInputContainer'>
                                    <input onChange={e => setUserInput(e.target.value)} className='quizInput rounded-full' type='text' />
                                    <img onClick={addUserData(item.key, userInput, item.nextQuestion)} className='absolute cursor-pointer' style={{ right: "40px" }} src='/images/rightArrow.svg' alt='' />
                                </div>
                            ))

                            :
                            null
                    }
                </div>
            </div>
        </div>
    )
}

export default QuizCard;
